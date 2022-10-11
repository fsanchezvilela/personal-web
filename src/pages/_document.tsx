import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <meta
        name="description"
        content="Personal website of Fernando Sanchez Vilela (@fsanchezvilela)"
      />
      <meta name="theme-color" content="#333333" />
      <meta name="referrer" content={'strict-origin'} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <body className='font-inter'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
