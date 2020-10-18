import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import store, { wrapper } from '@store';
import { COLORS_MAP } from '@src/constants';

const GlobalStyle = createGlobalStyle`
html, body {
  font-size: 10px;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
    font-family: Verdana,Geneva,sans-serif;
    background-color: ${COLORS_MAP.springWood}
}

ul, li {
  padding: 0;
  margin: 0;
}
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default wrapper.withRedux(MyApp);
