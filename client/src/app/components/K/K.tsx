import React, { FC } from 'react';
import * as L from 'leda';

export const K: FC = () => {
  return (
    <L.Div _wrapper>
      <L.Input isRequired form="myForm" name="myInput" />
      <L.Button form="myForm">Click me</L.Button>
    </L.Div>
  );
};
