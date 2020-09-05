import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Form as FormikForm, Formik } from 'formik';
import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { signUp } from '../../../../../../store/auth/actions';
import { AppDispatch } from '../../../../../../store/configureAppStore.prod';
import { FormikAttachedTextField } from '../../../../shared/FormikAttachedTextField';
import { form, submitButton } from './styles';

type FormValues = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Should be longer than 5 symbols')
    .required('Required'),
});

export const SignUpForm: FC = () => {
  const reduxDispatch: AppDispatch = useDispatch();

  const handleSubmit = useCallback(
    async (formValues: FormValues) => {
      const resultAction = await reduxDispatch(signUp(formValues));

      if (signUp.fulfilled.match(resultAction)) {
        toast(`Registered with email: ${formValues.email}`, { type: 'success' });
      } else if (signUp.rejected.match(resultAction) && resultAction.payload) {
        const errorMessage = resultAction.payload.error;

        toast(errorMessage, { type: 'error' });
      }
    },
    [reduxDispatch],
  );

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormikForm css={form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormikAttachedTextField
              formikFieldProps={{ name: 'email' }}
              textFieldProps={{
                id: 'email',
                variant: 'outlined',
                required: true,
                fullWidth: true,
                label: 'Email Address',
                autoComplete: 'email',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikAttachedTextField
              formikFieldProps={{ name: 'password' }}
              textFieldProps={{
                id: 'password',
                variant: 'outlined',
                required: true,
                fullWidth: true,
                label: 'Password',
                autoComplete: 'email',
              }}
            />
          </Grid>
        </Grid>
        <Button
          css={submitButton}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          {'Sign Up'}
        </Button>
      </FormikForm>
    </Formik>
  );
};
