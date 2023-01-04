import React, { useState } from 'react';
import { AppBar, Avatar, Box, IconButton, Stack, Switch, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import avatarPhoto from '../assets/my-photo.jpg';
import stylesHeader from './Header.module.css';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const defoultValueState = localStorage.getItem('i18nextLng') || '';
  const [langCurrent, setLangCurrent] = useState(defoultValueState);

  const changeLanguage = () => {
    const localLang = langCurrent === 'en-US' ? 'ru-RU' : 'en-US';
    i18n.changeLanguage(localLang);
    localStorage.setItem('i18nextLng', localLang);
    setLangCurrent(localLang);
  };

  return (
    <>
      <AppBar className={stylesHeader.headerWrapper}>
        <Toolbar className={stylesHeader.headerToolbar}>
          <Box>
            <Typography variant="h5" component="h1">
              {t('name')}
            </Typography>
            <Typography component="h2">{t('job-position')}</Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>{t('language-en')}</Typography>
            <Switch
              checked={langCurrent === 'ru-RU' ? true : false}
              onChange={changeLanguage}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography>{t('language-ru')}</Typography>
          </Stack>
          <Box>
            <IconButton>
              <Avatar alt="my-picture" src={avatarPhoto} className={stylesHeader.headerAvatar} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
