import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />

        {/* Customize Social Media Preview of your Website Links */}
        <meta property="og:url" content="https://unidosporucrania.ml/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unidos por Ucrania" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="Grupo de iniciativas de ayuda humanitaria a Ucrania desde España" />
        <meta property="og:image" content="/images/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
