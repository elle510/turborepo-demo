import { AppProps } from 'next/app';
import React from 'react';

import '../styles/globals.css';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;