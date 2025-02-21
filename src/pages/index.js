//index.js
import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import localFont from "next/font/local";
import Experience from "@/components/experience";
import ProjectSection from "@/components/projectsection";
import Education from "@/components/education";
import ParticlesBackground from "@/components/particlesbackground";
import { Press_Start_2P } from 'next/font/google';



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
// Import Press Start 2P
const pressStart2P = Press_Start_2P({
  weight: '400', // Available weights for Press Start 2P
  subsets: ['latin'],

});

export default function Home() {
  return (
    <>
      <Head>
        <title>William &quot;Trey&quot; Kelly | Computer Engineer &amp; AI Specialist</title>
        <meta name="description" content="Explore the digital portfolio of William 'Trey' Kelly, a software engineer specializing in artificial intelligence, computer engineering,
         and cutting-edge technologies. Discover projects, skills, freelance work, and experience." />
        <meta name="keywords" content="William Kelly, Trey Kelly, software engineer, artificial intelligence, machine learning, computer engineering, AI, ML, software development, digital portfolio" />
        <meta name="author" content="William Kelly III" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Remove the favicon link here */}
      </Head>

      <div
        className={`${pressStart2P.variable} ${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 dark:text-white min-h-screen flex flex-col relative`}
      >
        {/* Add the Particle Background */}
        <ParticlesBackground />

        {/* Render the Header */}
        <Header />

        {/* Main Hero Section */}
        <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 relative">
          <Hero />
          <br />
          <br />
          <Education /> {/* Render Education section here */}
          <Experience /> {/* Render Experience section here */}
          <ProjectSection /> {/* Render Projects section here */}
        </main>

        {/* Footer */}
        <footer className="text-center py-6 bg-transparent dark:bg-transparent text-gray-500 relative">
          <p>
            © {new Date().getFullYear()} William (Trey) Kelly | All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
