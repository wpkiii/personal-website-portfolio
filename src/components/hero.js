// src/components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-6 md:space-y-0 p-6 max-w-7xl mx-auto">
      {/* Profile Image */}
      <div className="relative">
        <Image
          src="/ForbesShot.JPG"
          alt="William Kelly"
          width={1000}
          height={1000}
          className="rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-black text-white text-sm px-3 py-1 rounded-full shadow-md">
        🏅 GEM Fellow
        </span>

      </div>

      {/* Hero Text */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900">Hey there! I'm William (Trey)</h1>
        <p className="mt-4 text-lg text-gray-600">
        I'm a dedicated developer, engineer, and designer passionate about crafting innovative solutions that make a difference.  <br /><br />
        A critical thinker and adaptable team player, I thrive on solving complex problems and building innovative products that push technology forward.
        </p>
        <br />

        
        {/* Social Media Links 
            - Only takes relative paths*/}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <a href="mailto:treypkelly@gmail.com">
            <Image src="/icons/mail.svg" alt="Email" width={40} height={40} />
          </a>
          <a href="https://github.com/wpkiii" target="_blank" rel="noreferrer">
            <Image src="/icons/github.svg" alt="GitHub" width={40} height={40}  />
          </a>
          <a href="https://www.linkedin.com/in/william-kelly-748409194/" target="_blank" rel="noreferrer">
            <Image src="/icons/LinkedIn_icon.svg" alt="LinkedIn" width={40} height={40}  /> 
          </a>
          <a href="https://www.youtube.com/@trickswithtrey" target="_blank" rel="noreferrer">
            <Image src="/icons/youtube.svg" alt="Twitter" width={40} height={40}  />
          </a>
        </div>
      </div>
    </section>
  );
}
