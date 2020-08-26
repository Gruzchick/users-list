import * as L from 'korus-ui';
import React, { FC, useState, useEffect } from 'react';
import { serverAPI } from '../../../api/serverAPI';

export const K: FC = () => {
  // const [hello, setHello] = useState('');
  //
  // useEffect(() => {
  //   async function fetchHello() {
  //     const { data } = await serverAPI.hello();
  //     setHello(data.hello);
  //   }
  //   fetchHello();
  // }, []);

  return (
    <L.Div _wrapper>
      <L.Input isRequired form="myForm" name="myInput" />
      <L.Button form="myForm">Click me</L.Button>
      {/*<L.Div>{hello}</L.Div>*/}
    </L.Div>
  );
};
