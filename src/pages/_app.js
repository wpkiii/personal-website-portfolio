// src/pages/_app.js
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/ok.svg" type="image/svg+xml" />
        {/* Global Meta Tags */}
        <title>William Kelly - Digital Portfolio</title>
        <meta
          name="description"
          content="Portfolio of William Kelly, specializing in AI and Computer Engineering."
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
