import Image from 'next/image';
import SocialLinks from '@/components/sociallinks';
import AsciiFrame from '@/components/asciiframe';

const education = [
  {
    school: 'Northwestern University',
    logo: '/northwestern.png',
    detail: 'M.S. Computer Engineering (Focus: AI & ML) · 2024',
    link: 'https://www.mccormick.northwestern.edu/electrical-computer/',
    gradient: 'bg-northwestern-gradient',
    swirl: 'edu-card--nu',
  },
  {
    school: 'North Carolina A&T State University',
    logo: '/ncat2.png',
    detail: 'B.S. Computer Engineering · 2023',
    link: 'https://www.ncat.edu/coe/departments/ece/index.php',
    gradient: 'bg-ncat-gradient',
    swirl: 'edu-card--ncat',
  },
];

export default function AboutMe() {
  return (
    <section id="about-me" className="flex flex-col items-center px-6 pt-16 pb-28 lg:pb-32 max-w-7xl mx-auto overflow-hidden">
      {/* Hero: centered circular photo in the ASCII scanner ring, story below */}
      <div className="flex flex-col items-center text-center w-full">
        {/* Circle sized like zachjordan.io's (384px); 240px on phones, the most
            that fits with the double hex ring. Square crop kept a little above
            center so the face sits in the middle. */}
        <AsciiFrame shape="oval" rings={2} className="w-[308px] md:w-[452px]">
          <Image
            src="/headshot.jpg"
            alt="William Kelly"
            width={1000}
            height={1266}
            priority
            sizes="(min-width: 768px) 384px, 240px"
            className="block w-full aspect-square object-cover object-[center_30%]"
          />
        </AsciiFrame>

        {/* Two balanced lines on desktop, spanning wider than the paragraph: the
            size tracks the section width (~24px at 1024 wide → 32px at ~1300+) */}
        <h1 className="mt-8 w-full font-heading text-2xl lg:text-[length:min(calc((100vw-7rem)/37.5),2rem)] font-extrabold leading-tight tracking-tight text-balance text-ink">
          Hey, I&apos;m{' '}
          {/* gold-ink passes large-text contrast on white; bright gold on dark */}
          <span className="text-signal-ink">William Kelly</span>. This is where I document what I&apos;m
          building, what I&apos;m learning, and what I&apos;m figuring out along the way.
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
          I&apos;m a full-stack AI developer and entrepreneur. I build full-stack software, generative AI, computer
          vision, and data systems for national security and commercial clients, and I&apos;ve shipped my own
          products to real users across web, iOS, and Android. I thrive on solving complex problems and building
          innovative products that push humanity forward.
        </p>

        <SocialLinks size={40} className="justify-center gap-4 mt-8" />

        {/* Education: compact cards, side by side on wider screens */}
        <h2 className="sr-only">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 w-full max-w-2xl">
          {education.map((school) => (
            <a
              key={school.school}
              href={school.link}
              target="_blank"
              rel="noreferrer"
              className={`edu-card ${school.swirl} group flex items-center gap-3 p-3 rounded-lg shadow-md transition transform hover:scale-105 ${school.gradient}`}
            >
              <span aria-hidden="true" className="edu-card__swirl" />
              <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
                <Image
                  src={school.logo}
                  alt={school.school}
                  width={40}
                  height={40}
                  className="rounded-md object-contain"
                />
              </div>
              <div className="relative text-left min-w-0">
                <h3 className="font-heading text-xs font-bold text-black">
                  <span className="hover-underline">{school.school}</span>
                </h3>
                <p className="text-[11px] leading-snug text-black mt-0.5">{school.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
