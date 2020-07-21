import { css } from '@emotion/core';
import { ObjectInterpolation, SerializedStyles } from '@emotion/serialize';

import { CustomTheme } from '../../../theme';

export const drawerWidth = 240;

export const wrapper = css`
  display: flex;
`;

export const toolbar = css`
  padding-right: 24px; /* keep right padding when drawer closed */
`;

export const toolbarIcon = (theme: CustomTheme): SerializedStyles => {
  const themeToolbarMixins = css(
    theme.mixins.toolbar as ObjectInterpolation<undefined>,
  );

  return css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 8px;
    background-color: white;
    ${themeToolbarMixins}
  `;
};

export const appBar = (theme: CustomTheme): SerializedStyles => {
  const transition = theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  });

  return css`
    z-index: ${theme.zIndex.drawer + 1};
    transition: ${transition};
  `;
};

export const appBarShift = (theme: CustomTheme): SerializedStyles => {
  const transition = theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  });

  return css`
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth};
    transition: ${transition};
  `;
};

export const menuButton = css`
  margin-right: 36px;
`;

export const menuButtonHidden = css`
  display: none;
`;

export const title = css`
  flex-grow: 1;
`;

export const drawer = (theme: CustomTheme): SerializedStyles => {
  const transition = theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  });

  return css`
    & .MuiDrawer-paper {
      position: relative;
      width: ${drawerWidth}px;
      transition: ${transition};
      white-space: nowrap;
    }
  `;
};

export const drawerClose = (theme: CustomTheme): SerializedStyles => {
  const transition = theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  });

  return css`
    & .MuiDrawer-paper {
      width: ${theme.spacing(7)}px;
      overflow-x: hidden;
      transition: ${transition};
      ${theme.breakpoints.up('sm')}: {
        width: ${theme.spacing(9)}px;
      }
    }
  `;
};

export const content = css`
  overflow: auto;
  height: 100vh;
  flex-grow: 1;
`;

export const appBarSpacer = (theme: CustomTheme): SerializedStyles =>
  css(theme.mixins.toolbar as ObjectInterpolation<undefined>);

export const container = (theme: CustomTheme): SerializedStyles =>
  css`
    padding-top: ${theme.spacing(4)};
    padding-bottom: ${theme.spacing(4)};
  `;
