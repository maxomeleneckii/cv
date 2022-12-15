import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Section } from './styledComponents/styledComponents';

export const leftSectionData = {
  aboutMe:
    'A dedicated JavaScript developer engaged in programming for about 2 years. I work in conjunction with the React library. I try to use the latest ECMAScript features. I perform the assigned tasks on time. I am striving to get a job in an IT company in order to use my existing experience with JavaScript, as well as gain new experience on large projects.',
  experience: {
    date: '',
    jobTitle: '',
    description: '',
  },
};

export const LeftSection = () => {
  return (
    <>
      <Section>
        <List>
          <ListItem>
            <ListItemText
              primary={''}
              secondary={
                <Typography sx={{ textAlign: 'justify' }}>
                  A dedicated JavaScript developer engaged in programming for about 2 years. I work
                  in conjunction with the React library. I try to use the latest ECMAScript
                  features. I perform the assigned tasks on time. I am striving to get a job in an
                  IT company in order to use my existing experience with JavaScript, as well as gain
                  new experience on large projects.
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItemText
              sx={{ width: '100%' }}
              primary={
                <>
                  <Typography variant="h6" component="h3">
                    Experience
                  </Typography>
                  <Divider />
                </>
              }
            />
            <List sx={{ width: '100%' }}>
              <ListItem>
                <ListItemText>20.12.2022</ListItemText>
                <ListItemText>Content</ListItemText>
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItemText
              sx={{ width: '100%' }}
              primary={
                <>
                  <Typography variant="h6" component="h3">
                    Education
                  </Typography>
                  <Divider />
                </>
              }
            />
            <List sx={{ width: '100%' }}>
              <ListItem>
                <ListItemText>20.12.2022</ListItemText>
                <ListItemText>Content</ListItemText>
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItemText
              sx={{ width: '100%' }}
              primary={
                <>
                  <Typography variant="h6" component="h3">
                    Certificates
                  </Typography>
                  <Divider />
                </>
              }
            />
            <List sx={{ width: '100%' }}>
              <ListItem>
                <ListItemText>20.12.2022</ListItemText>
                <ListItemText>Content</ListItemText>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Section>
    </>
  );
};
