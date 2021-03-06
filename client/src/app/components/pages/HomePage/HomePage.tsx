import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from 'emotion-theming';
import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../../store/configureAppStore.prod';
import { CustomTheme } from '../../../theme';
import { HomePageNav } from './components/HomePageNav';
import { HomePageRouter } from './components/HomePageRouter';
import {
  appBar,
  appBarShift,
  appBarSpacer,
  container,
  content,
  drawer,
  drawerClose,
  menuButton,
  menuButtonHidden,
  title,
  toolbar,
  toolbarIcon,
  wrapper,
} from './styles';

export const HomePage: FC = () => {
  const theme = useTheme<CustomTheme>();
  const reduxDispatch: AppDispatch = useDispatch();

  const [isOpen, setIsOpen] = React.useState(true);

  const handleDrawerOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSignOut = useCallback(() => {
    // reduxDispatch(signOut());
  }, [reduxDispatch]);

  return (
    <div css={wrapper}>
      <AppBar
        position="absolute"
        css={[appBar(theme), isOpen && appBarShift(theme)]}
      >
        <Toolbar css={toolbar}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            css={[menuButton, isOpen && menuButtonHidden]}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" noWrap css={title}>
            {'Dashboard'}
          </Typography>
          <IconButton color="inherit" onClick={handleSignOut}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        css={[drawer(theme), !isOpen && drawerClose(theme)]}
        open={isOpen}
      >
        <div css={toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <HomePageNav />
      </Drawer>
      <main css={content}>
        <div css={appBarSpacer} />
        <Container maxWidth="lg" css={container}>
          <HomePageRouter />
        </Container>
      </main>
    </div>
  );
};
