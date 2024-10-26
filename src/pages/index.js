// src/pages/index.js
import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import localFont from "next/font/local";

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
        <title>William Kelly Portfolio</title>
        <meta name="description" content="Portfolio of William Trey Kelly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable} bg-white min-h-screen flex flex-col`}>
        {/* Render the Header */}
        <Header />

        {/* Main Hero Section */}
        <main className="flex-grow pt-24">
          <Hero />
        </main>

        {/* Footer */}
        <footer className="text-center py-6 bg-gray-100 text-gray-500">
          <p>© {new Date().getFullYear()} William "Trey" Kelly | All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
