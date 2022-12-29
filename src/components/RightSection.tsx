import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Rating,
  Stack,
  Box,
  useMediaQuery,
} from '@mui/material';
import { rightSectionData } from '../data/rightSectionData';
import { Section } from './styledComponents/styledComponents';

export const RightSection = () => {
  const matches = useMediaQuery('(max-width:767px)');
  return (
    <>
      <Section
        style={{ flex: `${matches ? '0 0 100%' : '0 0 320px'}`, backgroundColor: '#f4f4f4' }}
      >
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
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 'bold', color: '#003d73' }}
                      >
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
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography component="h5" sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                              {item.text}
                            </Typography>
                            {section.title === 'Skills' ? (
                              <Stack spacing={1} sx={{ alignItems: 'flex-end' }}>
                                <Rating
                                  size="small"
                                  name="half-rating-read"
                                  defaultValue={item.rating}
                                  precision={0.5}
                                  readOnly
                                  sx={{ color: '#003d73' }}
                                />
                              </Stack>
                            ) : (
                              <Typography>{item.ratingText}</Typography>
                            )}
                          </Box>
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
