// src/pages/_app.js
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from "next/head";
import { DefaultSeo } from 'next-seo';
import { Montserrat, Inter_Tight, Courier_Prime } from "next/font/google";
import CustomCursor from "@/components/cursor";
import { useEffect } from "react";
import { useTheme } from "next-themes";

// Applies a day/night theme based on the visitor's local clock, unless
// they've manually toggled the theme this session (sessionStorage flag,
// set by the header's toggle) — a manual choice wins until the tab closes.
function AutoTheme() {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (sessionStorage.getItem("theme-manual")) return;
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 19 ? "light" : "dark");
  }, [setTheme]);

  return null;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/icons/signature.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icons/signature.svg?v=2" />
        <link rel="apple-touch-icon" href="/icons/signature.svg?v=2" />

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
        <AutoTheme />
        <div className={`${montserrat.variable} ${interTight.variable} ${courierPrime.variable} font-sans`}>
          <CustomCursor />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
