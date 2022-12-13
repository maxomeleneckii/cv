import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <Typography variant="h6" component="h1">
            Max Omeleneckii
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
