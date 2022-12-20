import { Divider, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import styled from 'styled-components';
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

const ListItemCustom = styled.li`
  padding: 0px;
  margin-left: 15px;
`;

export const LeftSection = () => {
  return (
    <>
      <Section>
        <List>
          <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
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
              <ListItem sx={{ paddingLeft: '0px', columnGap: '30px', alignItems: 'flex-start' }}>
                <ListItemText sx={{ flex: '0 0 100px' }}>05.06.2021 - 06.12.2022</ListItemText>
                <ListItemText>
                  <Typography component="h3" sx={{ fontWeight: 'bold' }}>
                    Frontend Developer
                  </Typography>
                  <Typography component="h4" sx={{ fontStyle: 'italic' }}>
                    RSSchool (student)
                  </Typography>
                  <List sx={{ listStyle: 'disc' }}>
                    <ListItemCustom>
                      Implemented websites and browser games using HTML, CSS (SCSS), JS, TS.
                    </ListItemCustom>
                    <ListItemCustom>
                      Used the React library in development in conjunction with MUI, styled
                      components, modular styles, Redux and much more.
                    </ListItemCustom>
                    <ListItemCustom>
                      Participated in the team development of web applications using TS and React.
                      Team work example:{' '}
                      <Link
                        href="https://kiselmen.github.io/project-management-app/"
                        target="_blank"
                      >
                        Brello.
                      </Link>
                    </ListItemCustom>
                    <ListItemCustom>
                      Applied class and functional approaches in development.
                    </ListItemCustom>
                  </List>
                </ListItemText>
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
              <ListItem sx={{ paddingLeft: '0px', columnGap: '30px', alignItems: 'flex-start' }}>
                <ListItemText sx={{ flex: '0 0 100px' }}>01.08.2014 - 25.06.2019</ListItemText>
                <ListItemText>
                  <Typography component="h3" sx={{ fontWeight: 'bold' }}>
                    Civil Engineer (Higher)
                  </Typography>
                  <Typography component="h4" sx={{ fontStyle: 'italic' }}>
                    Brest State Technical University, Brest, Belarus
                  </Typography>
                </ListItemText>
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
