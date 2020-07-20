import { Container, Grid, Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { SignUpForm } from './components/SignUpForm';
import { linkWrapper, title, titleImage, wrapper } from './styles';

export const SignUpPage: FC = () => {
  return (
    <Container css={wrapper} component="main" maxWidth="xs">
      <div css={title}>
        <Avatar css={titleImage}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {'Sign Up'}
        </Typography>
      </div>
      <SignUpForm />
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid css={linkWrapper} item xs>
          <Link component={RouterLink} to="/signin" variant="body2">
            {'Sign In'}
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
