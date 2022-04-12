import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" /> */}
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />

        {/* Customize Social Media Preview of your Website Links */}
        <meta property="og:site_name" content="Unidos por Ucrania - Ayuda humanitaria" />
        <meta property="og:title" content="Unidos por Ucrania" />
        <meta property="og:description" content="Grupo de iniciativas de ayuda humanitaria a Ucrania desde España" />

        <meta property="og:url" content="https://unidosporucrania.ml/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_es" />

        <meta property="og:image" content="https://unidosporucrania.ml/images/logo.png" />
        {/* <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
