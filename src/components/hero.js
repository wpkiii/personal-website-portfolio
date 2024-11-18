// src/components/Hero.js
import Image from 'next/image';
import { useEffect, useState,useMemo } from 'react';


export default function Hero() {
  const words = useMemo(() => ["Hey", "there!", "I'm", "William", "Kelly", "(Trey)"]);
  const [visibleWords, setVisibleWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => [...prev, words[currentWordIndex]]);
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }, 350); // Adjust delay as needed

    if (currentWordIndex >= words.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentWordIndex, words]);

  return (
    <section id="hero" className="flex flex-col items-center space-y-6 p-6 max-w-7xl mx-auto dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        
        {/* Profile Image */}
        <div className="relative">
          <Image
            src="/ForbesShot.JPG"
            alt="William Kelly"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
          <span className="absolute top-2 left-2 bg-black text-white text-sm px-3 py-1 rounded-full shadow-md dark:bg-white dark:text-black">
            🏅 GEM Fellow
          </span>
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex space-x-2">
            {visibleWords.map((word, index) => (
              <span key={index} className="animate-fadeInUp">
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            I&apos;m a dedicated developer, engineer, and designer passionate about crafting innovative solutions that make a difference. <br /><br />
            A critical thinker and adaptable team player, I thrive on solving complex problems and building innovative products that push technology forward.
          </p>
          
          {/* Social Media Links with Dark Mode */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <div className="group">
              <a href="mailto:treypkelly@gmail.com">
                <Image src="/icons/mail.svg" alt="Email" width={40} height={40} className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert" />
              </a>
            </div>
            <div className="group">
              <a href="https://github.com/wpkiii" target="_blank" rel="noreferrer">
                <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert" />
              </a>
            </div>
            <div className="group">
              <a href="https://www.linkedin.com/in/william-kelly-iii-748409194/" target="_blank" rel="noreferrer">
                <Image src="/icons/LinkedIn_icon.svg" alt="LinkedIn" width={40} height={40} className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert" /> 
              </a>
            </div>
            <div className="group">
              <a href="https://www.youtube.com/@trickswithtrey" target="_blank" rel="noreferrer">
                <Image src="/icons/youtube.svg" alt="YouTube" width={40} height={40} className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert" />
              </a>
            </div>
          </div>
        </div>
      </div><br/>

      {/* Tech Stack Section with Dark Mode */}
      <div className="mt-10 w-full text-center">
        <div className="flex space-x-6 py-4 justify-center items-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white whitespace-nowrap">My tech stack:</h2>
          {["python", "react", "next", "tailwindcss", "nodejs", "jupyternotebook"].map((icon) => (
            <div key={icon} className="group relative">
              <Image
                src={`/icons/${icon}.svg`}
                alt={icon.charAt(0).toUpperCase() + icon.slice(1)}
                width={60}
                height={60}
                className="transition-transform transform group-hover:scale-150 duration-200 dark:filter dark:invert"
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 dark:bg-white dark:text-black">
                {icon.charAt(0).toUpperCase() + icon.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
