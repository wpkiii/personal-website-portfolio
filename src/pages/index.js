// src/pages/index.js
import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import Experience from "@/components/experience";
import ProjectSection from "@/components/projectsection";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>William Kelly</title>
        <meta name="description" content="Portfolio of William Trey Kelly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="tabicon" href="/public/icons/dollar.svg" />
      </Head>

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
      <div className={`${geistSans.variable} ${geistMono.variable} bg-white min-h-screen flex flex-col`}>
        {/* Render the Header */}
        <Header />

        {/* Main Hero Section */}
        <main className="flex-grow pt-24">
          <Hero />
          <br/>
          <br />
          <Experience />  {/* Render Experience section here */}
          <ProjectSection />
        </main>

        {/* Footer */}
        <footer className="text-center py-6 bg-gray-100 text-gray-500">
          <p>© {new Date().getFullYear()} William (Trey) Kelly | All rights reserved.</p>
        </footer>
      </div>
      </ThemeProvider>
    </>
  );
}
