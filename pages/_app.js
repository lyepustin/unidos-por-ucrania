import "../public/css/bootstrap.min.css";
import "../public/css/material-design-iconic-font.min.css";
import "../public/css/plugins.css";
import "../public/css/style.css";
import "react-medium-image-zoom/dist/styles.css";

import React from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Unidos por Ucrania</title>
        <meta charSet="utf-8" />
        <meta content="ie=edge" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="/js/modernizr-2.8.3.min.js" defer={true} />
      <Script src="/js/bootstrap.min.js" defer={true} />

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
