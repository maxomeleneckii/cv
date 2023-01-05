import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Rating,
  Stack,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SectionRight } from '../styledComponents/styledComponents';
import { styles } from './RightSection.styles';
import { RightSectionDataType } from '../types';

export const RightSection = () => {
  const { t } = useTranslation();
  const dataRight = t('data-right', { returnObjects: true }) as RightSectionDataType[];

  return (
    <>
      <SectionRight>
        <List>
          {dataRight.map((section) => {
            const currentTitlePersonalInf =
              section.title === 'Personal info' || section.title === 'Личная информация';
            const currentTitleSkills = section.title === 'Skills' || section.title === 'Навыки';

            return (
              <ListItem key={section.title} sx={styles.listItem}>
                <ListItemText
                  sx={styles.listItemText}
                  primary={
                    <>
                      <Typography variant="h5" component="h3" sx={styles.listItemTitle}>
                        {section.title}
                      </Typography>
                      <Divider />
                    </>
                  }
                />
                <List sx={styles.listItemText}>
                  {section.description!.map((item) => (
                    <ListItem key={item.text} sx={{ padding: '0' }}>
                      <ListItemText
                        disableTypography={true}
                        primary={
                          currentTitlePersonalInf && (
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
                            {currentTitleSkills ? (
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
      </SectionRight>
    </>
  );
};
