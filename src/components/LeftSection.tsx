import { Divider, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListItemCustom, SectionLeft } from '../styledComponents/styledComponents';
import { LeftSectionDataType } from '../types';
import { styles } from './LeftSection.styles';

export const LeftSection = () => {
  const { t } = useTranslation();
  const dataLeft = t('data-left', { returnObjects: true }) as LeftSectionDataType[];

  return (
    <>
      <SectionLeft>
        <List>
          {dataLeft.map((section) => {
            const currentTitleAbout = section.title === 'About';
            const currentTitleCertif =
              section.title === 'Certificates' || section.title === 'Сертификаты';

            return (
              <ListItem key={section.title} sx={styles.listItem}>
                <ListItemText
                  sx={styles.listItemText}
                  primary={
                    !currentTitleAbout && (
                      <>
                        <Typography variant="h5" component="h3" sx={styles.listItemTitle}>
                          {section.title}
                        </Typography>
                        <Divider />
                      </>
                    )
                  }
                  secondary={
                    currentTitleAbout && (
                      <Typography sx={styles.listItemContent}>
                        {section.description[0].text}
                      </Typography>
                    )
                  }
                />
                {!currentTitleAbout && (
                  <List sx={styles.listItemText}>
                    <ListItem sx={styles.listItemNotAbout}>
                      <ListItemText sx={styles.listItemTextNotAbout}>{section.date}</ListItemText>
                      <ListItemText>
                        <Typography component="h3" sx={styles.listItemTextJob}>
                          {section.position}
                        </Typography>
                        <Typography component="h4" sx={styles.listItemTextCompany}>
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
      </SectionLeft>
    </>
  );
};
