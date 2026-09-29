import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import SectionHeader from '@/components/sectionheader';
import SocialLinks from '@/components/sociallinks';

const education = [
  {
    school: 'Northwestern University',
    logo: '/northwestern.png',
    logoSize: 87,
    detail: 'M.S. Computer Engineering (Focus: AI & ML) · 2024',
    link: 'https://www.mccormick.northwestern.edu/electrical-computer/',
    gradient: 'bg-northwestern-gradient',
    swirl: 'edu-card--nu',
  },
  {
    school: 'North Carolina A&T State University',
    logo: '/ncat2.png',
    logoSize: 48,
    detail: 'B.S. Computer Engineering · 2023',
    link: 'https://www.ncat.edu/coe/departments/ece/index.php',
    gradient: 'bg-ncat-gradient',
    swirl: 'edu-card--ncat',
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
      <SectionHeader index="01" title="About Me" />

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Profile Image */}
        <div className="relative">
          <Image
            src="/headshot.jpg"
            alt="William Kelly"
            width={1000}
            height={1266}
            priority
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
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
          <SocialLinks size={40} className="justify-center md:justify-start gap-4 mt-6" />

          {/* Education — compact contact cards */}
          <h2 className="sr-only">Education</h2>
          <div className="flex flex-col gap-3 mt-14">
            {education.map((school) => (
              <a
                key={school.school}
                href={school.link}
                target="_blank"
                rel="noreferrer"
                className={`edu-card ${school.swirl} group flex items-center gap-4 p-4 rounded-lg shadow-lg transition transform hover:scale-105 ${school.gradient}`}
              >
                <span aria-hidden="true" className="edu-card__swirl" />
                <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={school.logo}
                    alt={school.school}
                    width={school.logoSize}
                    height={school.logoSize}
                    className="rounded-md object-contain"
                  />
                </div>
                <div className="relative text-left">
                  <h3 className="font-heading text-sm font-bold text-black">
                    <span className="hover-underline">{school.school}</span>
                  </h3>
                  <p className="text-xs text-black mt-0.5">
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
