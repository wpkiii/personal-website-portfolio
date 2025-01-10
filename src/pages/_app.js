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
          content="Welcome to the digital portfolio of William Kelly III (Trey), showcasing expertise in artificial intelligence, computer engineering, and software development."
        />
        <meta name="keywords" content="William Kelly, Trey Kelly, software engineer, artificial intelligence, machine learning, computer engineering, AI, ML, software development, digital portfolio" />
        <meta name="author" content="William Kelly III" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
