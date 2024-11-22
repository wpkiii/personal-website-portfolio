import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import localFont from "next/font/local";
import Experience from "@/components/experience";
import ProjectSection from "@/components/projectsection";
import Education from "@/components/education";

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
        <meta name="description" content="Portfolio of William 'Trey' Kelly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Remove the favicon link here */}
      </Head>

      <div
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 dark:text-white min-h-screen flex flex-col`}
      >
        {/* Render the Header */}
        <Header />

        {/* Main Hero Section */}
        <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8">
          <Hero />
          <br />
          <br />
          <Education /> {/* Render Education section here */}
          <Experience /> {/* Render Experience section here */}
          <ProjectSection />
        </main>

        {/* Footer */}
        <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800 text-gray-500">
          <p>
            © {new Date().getFullYear()} William (Trey) Kelly | All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
