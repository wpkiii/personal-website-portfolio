// src/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to your PNG favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>William Kelly - Digital Portfolio</title>
        <meta name="description" content="Portfolio of William Kelly, specializing in AI and Computer Engineering." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
