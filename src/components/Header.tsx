import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import myPhoto from '../assets/my-photo.jpg';

export const Header = () => {
  return (
    <>
      <AppBar
        sx={{ position: 'relative', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
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
