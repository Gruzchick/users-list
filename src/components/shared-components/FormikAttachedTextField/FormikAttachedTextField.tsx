import TextField from '@material-ui/core/TextField';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import { FieldConfig, useField } from 'formik';
import React, { FC } from 'react';
import { Object as toolBeltObj } from 'ts-toolbelt';

type Props = {
  formikFieldProps: FieldConfig;
  textFieldProps: toolBeltObj.Exclude<TextFieldProps, FieldConfig>;
};

export const FormikAttachedTextField: FC<Props> = ({
  formikFieldProps,
  textFieldProps,
}) => {
  const [field, meta] = useField(formikFieldProps);
  const { error, touched } = meta;

  return (
    <TextField
      {...textFieldProps}
      {...field}
      helperText={error}
      error={Boolean(error && touched)}
    />
  );
};
