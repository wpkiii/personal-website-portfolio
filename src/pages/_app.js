// src/pages/_app.js
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // Ensure ThemeProvider is imported
import Head from "next/head"; // Import Head for favicon and other meta tags


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Use an SVG file as the favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Optionally add a title and meta description */}
        <title>William Kelly - Digital Portfolio</title>
        <meta name="description" content="Portfolio of William Kelly, specializing in AI and Computer Engineering." />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
