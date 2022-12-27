import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import { rightSectionData } from '../data/rightSectionData';
import { Section } from './styledComponents/styledComponents';

export const RightSection = () => {
  return (
    <>
      <Section style={{ flex: '0 0 200px' }}>
        <List>
          {rightSectionData.map((section) => {
            return (
              <ListItem key={section.title} sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemText
                  sx={{ width: '100%' }}
                  primary={
                    <>
                      <Typography variant="h6" component="h3">
                        {section.title}
                      </Typography>
                      <Divider />
                    </>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Section>
    </>
  );
};
