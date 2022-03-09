import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
        <Script src="js/vendor/modernizr-2.8.3.min.js" />
        <Script src="js/vendor/jquery-1.12.4.min.js" />
        <Script src="js/bootstrap.min.js" />
        <Script src="js/plugins.js" />
        <Script src="js/ajax-mail.js" />
        <Script src="js/main.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
