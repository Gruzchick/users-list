import { Container, Grid, Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { SignInForm } from './components/SignInForm';
import { linkWrapper, title, titleImage, wrapper } from './styles';

export const SignInPage: FC = () => {
  return (
    <Container css={wrapper} component="main" maxWidth="xs">
      <div css={title}>
        <Avatar css={titleImage}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {'Sign In'}
        </Typography>
      </div>
      <SignInForm />
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid css={linkWrapper} item xs>
          <Link component={RouterLink} to="/signup" variant="body2">
            {'Sign Up'}
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
