import "../public/css/bootstrap.min.css";
import "../public/css/material-design-iconic-font.min.css";
import "../public/css/plugins.css";
import "../public/css/style.css";

import React from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Political</title>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
