//index.js
import Head from "next/head";
import { useLayoutEffect } from "react";
import Header from "@/components/header";
import AboutMe from "@/components/aboutme";
import Experience from "@/components/experience";
import ProjectSection from "@/components/projectsection";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particlesbackground";

export default function Home() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // A previous nav click can leave a hash (e.g. #experience) in the URL,
    // which makes the browser jump straight to that section on refresh.
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    window.scrollTo(0, 0);
  }, []);

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
        className="bg-white dark:bg-gray-900 dark:text-white min-h-screen flex flex-col relative"
      >
        {/* Add the Particle Background */}
        <ParticlesBackground />

        {/* Render the Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 relative">
          <AboutMe /> {/* Render About Me (bio + education) section here */}
          <Experience /> {/* Render Experience section here */}
          <ProjectSection /> {/* Render Projects section here */}
        </main>

        <Footer />
      </div>
    </>
  );
}
