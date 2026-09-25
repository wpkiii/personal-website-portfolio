import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';

const education = [
  {
    school: 'Northwestern University',
    logo: '/northwestern.png',
    logoSize: 87,
    detail: 'M.S. Computer Engineering (Focus: AI & ML) · 2024',
    link: 'https://www.mccormick.northwestern.edu/electrical-computer/',
    gradient: 'bg-northwestern-gradient',
  },
  {
    school: 'North Carolina A&T State University',
    logo: '/ncat2.png',
    logoSize: 48,
    detail: 'B.S. Computer Engineering · 2023',
    link: 'https://www.ncat.edu/coe/departments/ece/index.php',
    gradient: 'bg-ncat-gradient',
  },
];

export default function AboutMe() {
  const words = useMemo(() => ["Hi ", "there, ", "I'm ", "William ", "Kelly", "."], []);
  const [visibleWords, setVisibleWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const interval = setInterval(() => {
        setVisibleWords((prev) => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, 350); // Adjust delay as needed

      return () => clearInterval(interval);
    }
  }, [currentWordIndex, words]);

  return (
    <section id="about-me" className="flex flex-col items-center px-6 pt-16 pb-28 lg:pb-32 max-w-7xl mx-auto overflow-hidden">
      <h2 className="w-full font-heading text-4xl font-bold text-left mb-8 lg:mb-16 text-gray-900 dark:text-white">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Profile Image */}
        <div className="relative">
          <Image
            src="/AggieShirt%20copy.jpg"
            alt="William Kelly"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          {/* Font scales with viewport width on mobile so the greeting always fits on one line */}
          <h1 className="font-heading text-[length:min(calc((100vw-5rem)/14),1.875rem)] font-bold text-gray-900 dark:text-white whitespace-nowrap">
            {visibleWords.map((word, index) => (
              <span key={index}>
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-medium text-gray-600 dark:text-gray-400">
            I&apos;m a dedicated developer, engineer, and designer passionate about crafting innovative solutions that make a difference. <br /><br />
            A critical thinker and adaptable team player, I thrive on solving complex problems and building innovative products that push technology forward.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a href="mailto:treypkelly@gmail.com" className="group">
              <Image
                src="/icons/mail.svg"
                alt="Email"
                width={40}
                height={40}
                className="transition-transform transform group-hover:scale-125 duration-200"
              />
            </a>
            <a href="https://github.com/wpkiii" target="_blank" rel="noreferrer" className="group">
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={40}
                height={40}
                className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert"
              />
            </a>
            <a href="https://www.linkedin.com/in/william-kelly-iii-748409194/" target="_blank" rel="noreferrer" className="group">
              <Image
                src="/icons/LinkedIn_icon.svg"
                alt="LinkedIn"
                width={40}
                height={40}
                className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert"
              />
            </a>
            <a href="https://www.youtube.com/@trickswithtrey" target="_blank" rel="noreferrer" className="group">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={40}
                height={40}
                className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert"
              />
            </a>
            <a
              href="https://open.spotify.com/user/22cephxvqecscjamivxpra3oy?si=KYQ_U9jNSmayXvpOe7VkAg&utm_source=copy-link&nd=1&dlsi=494ad821af4c4e65"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <Image
                src="/icons/spotify.svg"
                alt="Spotify"
                width={40}
                height={40}
                className="transition-transform transform group-hover:scale-125 duration-200"
              />
            </a>
          </div>

          {/* Education — compact contact cards */}
          <div className="flex flex-col gap-3 mt-14">
            {education.map((school) => (
              <a
                key={school.school}
                href={school.link}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 p-4 rounded-lg shadow-lg transition transform hover:scale-105 ${school.gradient}`}
              >
                <div className="w-24 h-24 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={school.logo}
                    alt={school.school}
                    width={school.logoSize}
                    height={school.logoSize}
                    className="rounded-md object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-heading text-sm font-bold text-black">
                    {school.school}
                  </h3>
                  <p className="text-xs text-black/70 mt-0.5">
                    {school.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
