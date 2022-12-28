import { List, ListItem, ListItemText, Typography, Divider, Rating, Stack } from '@mui/material';
import { rightSectionData } from '../data/rightSectionData';
import { Section } from './styledComponents/styledComponents';

export const RightSection = () => {
  return (
    <>
      <Section style={{ flex: '0 0 200px' }}>
        <List>
          {rightSectionData.map((section) => {
            return (
              <ListItem
                key={section.title}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <ListItemText
                  sx={{ width: '100%' }}
                  primary={
                    <>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                        {section.title}
                      </Typography>
                      <Divider />
                    </>
                  }
                />
                <List sx={{ width: '100%' }}>
                  {section.description!.map((item) => (
                    <ListItem key={item.text} sx={{ padding: '0' }}>
                      <ListItemText
                        disableTypography={true}
                        primary={
                          section.title === 'Personal info' && (
                            <Typography component="h4" sx={{ fontWeight: 'bold' }}>
                              {item.subtitle}
                            </Typography>
                          )
                        }
                        secondary={
                          <>
                            <Typography component="h5" sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                              {item.text}
                            </Typography>
                            {section.title !== 'Personal info' && (
                              <Stack spacing={1} sx={{ alignItems: 'flex-end' }}>
                                <Typography component="legend" sx={{ fontSize: '14px' }}>
                                  {item.ratingText}
                                </Typography>
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={item.rating}
                                  precision={0.5}
                                  readOnly
                                  sx={{ color: '#1976d2' }}
                                />
                              </Stack>
                            )}
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            );
          })}
        </List>
      </Section>
    </>
  );
};
