import { Divider, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import { leftSectionData } from '../data/leftSectionData';
import { ListItemCustom, Section } from './styledComponents/styledComponents';

export const LeftSection = () => {
  return (
    <>
      <Section>
        <List>
          {leftSectionData.map((section) => {
            return (
              <ListItem key={section.title} sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemText
                  sx={{ width: '100%' }}
                  primary={
                    section.title !== 'About' && (
                      <>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                          {section.title}
                        </Typography>
                        <Divider />
                      </>
                    )
                  }
                  secondary={
                    section.title === 'About' && (
                      <Typography sx={{ textAlign: 'justify' }}>
                        {section.description[0].text}
                      </Typography>
                    )
                  }
                />
                {section.title !== 'About' && (
                  <List sx={{ width: '100%' }}>
                    <ListItem
                      sx={{ paddingLeft: '0px', columnGap: '30px', alignItems: 'flex-start' }}
                    >
                      <ListItemText sx={{ flex: '0 0 100px' }}>{section.date}</ListItemText>
                      <ListItemText>
                        <Typography component="h3" sx={{ fontWeight: 'bold' }}>
                          {section.position}
                        </Typography>
                        <Typography component="h4" sx={{ fontStyle: 'italic' }}>
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
                                ) : section.title === 'Certificates' ? (
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
