//hero.js
// src/components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex items-center space-x-8 p-6">
      {/* Profile Image */}
      <div className="relative">
        <Image
          src="/ForbesShot.JPG"
          alt="William Kelly"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-black text-white text-sm px-3 py-1 rounded-full">
          🏅 $9k hackathon winnings
        </span>
      </div>

      {/* Hero Text */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hey there! I'm William.</h1>
        <p className="mt-4 text-lg text-gray-600">
          I'm a scrappy builder of innovative apps. <br />
          Developer, engineer, and designer passionate about building products and solving problems.
        </p>
        
        {/* Social Media Links */}
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="mailto:example@gmail.com">
            <Image src="/icons/email.svg" alt="Email" width={24} height={24} />
          </a>
        </div>
      </div>
    </section>
  );
}