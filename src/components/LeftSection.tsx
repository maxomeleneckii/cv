import { Divider, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListItemCustom, Section } from '../styledComponents/styledComponents';
import { LeftSectionDataType } from '../types';
import stylesLeftSection from './LeftSection.module.css';

export const LeftSection = () => {
  const { t } = useTranslation();
  const dataLeft = t('data-left', { returnObjects: true }) as LeftSectionDataType[];

  return (
    <>
      <Section>
        <List>
          {dataLeft.map((section) => {
            const currentTitleAbout = section.title === 'About';
            const currentTitleCertif =
              section.title === 'Certificates' || section.title === 'Сертификаты';

            return (
              <ListItem key={section.title} className={stylesLeftSection.listItem}>
                <ListItemText
                  className={stylesLeftSection.listItemText}
                  primary={
                    !currentTitleAbout && (
                      <>
                        <Typography
                          variant="h5"
                          component="h3"
                          className={stylesLeftSection.listItemTitle}
                        >
                          {section.title}
                        </Typography>
                        <Divider />
                      </>
                    )
                  }
                  secondary={
                    currentTitleAbout && (
                      <Typography className={stylesLeftSection.listItemContent}>
                        {section.description[0].text}
                      </Typography>
                    )
                  }
                />
                {!currentTitleAbout && (
                  <List className={stylesLeftSection.listItemText}>
                    <ListItem className={stylesLeftSection.listItemNotAbout}>
                      <ListItemText className={stylesLeftSection.listItemTextNotAbout}>
                        {section.date}
                      </ListItemText>
                      <ListItemText>
                        <Typography component="h3" className={stylesLeftSection.listItemTextJob}>
                          {section.position}
                        </Typography>
                        <Typography
                          component="h4"
                          className={stylesLeftSection.listItemTextCompany}
                        >
                          {section.company}
                        </Typography>
                        <List sx={{ listStyle: 'disc' }}>
                          {section.description.map((item) => {
                            return (
                              <ListItemCustom key={item.text}>
                                {item.textLink ? (
                                  <>
                                    {item.text}
                                    <Link href={item.url} target="_blank">
                                      {item.textLink}
                                    </Link>
                                  </>
                                ) : currentTitleCertif ? (
                                  <Link href={item.url} target="_blank">
                                    {item.text}
                                  </Link>
                                ) : (
                                  item.text
                                )}
                              </ListItemCustom>
                            );
                          })}
                        </List>
                      </ListItemText>
                    </ListItem>
                  </List>
                )}
              </ListItem>
            );
          })}
        </List>
      </Section>
    </>
  );
};
