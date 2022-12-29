import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import myPhoto from '../assets/my-photo.jpg';

export const Header = () => {
  return (
    <>
      <AppBar
        sx={{
          position: 'relative',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          backgroundColor: '#003d73',
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" component="h1">
              Max Omeleneckii
            </Typography>
            <Typography variant="h6" component="h2" sx={{ fontSize: '16px' }}>
              Frontend Developer
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <Avatar alt="my-picture" src={myPhoto} sx={{ width: '60px', height: '60px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
