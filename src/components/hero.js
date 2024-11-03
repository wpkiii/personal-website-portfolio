// src/components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center space-y-6 p-6 max-w-7xl mx-auto">
      {/* Profile and Hero Text */}
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
          <span className="absolute top-2 left-2 bg-black text-white text-sm px-3 py-1 rounded-full shadow-md">
            🏅 GEM Fellow
          </span>
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">Hey there! I'm William (Trey)</h1>
          <p className="mt-4 text-lg text-gray-600">
            I'm a dedicated developer, engineer, and designer passionate about crafting innovative solutions that make a difference. <br /><br />
            A critical thinker and adaptable team player, I thrive on solving complex problems and building innovative products that push technology forward.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a href="mailto:treypkelly@gmail.com">
              <Image src="/icons/mail.svg" alt="Email" width={40} height={40} />
            </a>
            <a href="https://github.com/wpkiii" target="_blank" rel="noreferrer">
              <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} />
            </a>
            <a href="https://www.linkedin.com/in/william-kelly-748409194/" target="_blank" rel="noreferrer">
              <Image src="/icons/LinkedIn_icon.svg" alt="LinkedIn" width={40} height={40} /> 
            </a>
            <a href="https://www.youtube.com/@trickswithtrey" target="_blank" rel="noreferrer">
              <Image src="/icons/youtube.svg" alt="YouTube" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
<br/>
<br/>
<br/>

      {/* Tech Stack Section with Hover Animations */}
      <div className="mt-10 w-full text-center">
      
        <div className="flex space-x-6 overflow-x-scroll py-4 justify-center">
          {/* Icon with Tooltip and Scale Animation */}
          <br/>
          <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap">My tech stack:</h2>
          <div className="group relative">
            <Image
              src="/icons/python.svg"
              alt="Python"
              width={60}
              height={60}
              className="transition-transform transform group-hover:scale-110 duration-200"
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Python
            </span>
          </div>

          <div className="group relative">
            <Image
              src="/icons/react.svg"
              alt="React.js"
              width={60}
              height={60}
              className="transition-transform transform group-hover:scale-110 duration-200"
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              React.js
            </span>
          </div>

          <div className="group relative">
            <Image
              src="/icons/next.svg"
              alt="Next.js"
              width={60}
              height={60}
              className="transition-transform transform group-hover:scale-110 duration-200"
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Next.js
            </span>
          </div>

          <div className="group relative">
            <Image
              src="/icons/tailwindcss.svg"
              alt="Tailwind CSS"
              width={60}
              height={60}
              className="transition-transform transform group-hover:scale-110 duration-200"
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Tailwind CSS
            </span>
          </div>

          <div className="group relative">
            <Image
              src="/icons/nodejs.svg"
              alt="Node.js"
              width={60}
              height={60}
              className="transition-transform transform group-hover:scale-110 duration-200"
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Node.js
            </span>
          </div>

          <div className="group relative">
            <Image
              src="/icons/jupyternotebook.svg"
              alt="Jupyter Notebook"
              width={60}
              height={60}
              className="transition-transform transform group-hover:scale-110 duration-200"
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Jupyter Notebook
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
