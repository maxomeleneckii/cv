import React, { useState } from 'react';
import { AppBar, Avatar, Box, IconButton, Stack, Switch, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import myPhoto from '../assets/my-photo.jpg';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const [langCurrent, setLangCurrent] = useState(localStorage.getItem('i18nextLng'));

  const changeLanguage = () => {
    const localLang = langCurrent === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(localLang);
    localStorage.setItem('i18nextLng', localLang);
    setLangCurrent(localLang);
  };

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
              {t('name')}
            </Typography>
            <Typography variant="h6" component="h2" sx={{ fontSize: '16px' }}>
              {t('job-position')}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>{t('language-en')}</Typography>
            <Switch onChange={changeLanguage} inputProps={{ 'aria-label': 'controlled' }} />
            <Typography>{t('language-ru')}</Typography>
          </Stack>
          <Box>
            <IconButton>
              <Avatar alt="my-picture" src={myPhoto} sx={{ width: '80px', height: '80px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
