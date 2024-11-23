import Image from 'next/image';
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
});

export default function Education() {
  return (
    <section id="education" className={`bg-transparent dark:bg-transparent ${pressStart2P.className}`}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {/* Title Section */}
        <div className="mx-auto text-center mb-8 lg:mb-16 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-screen-sm">
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Education
          </h2>
        </div>

        {/* Grid Layout for Interactive Cards */}
        <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-1 md:grid-cols-2">
          {/* Northwestern University */}
          <div className="relative group bg-northwestern-gradient rounded-lg shadow p-6 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="flex-shrink-0 transform group-hover:-translate-x-full transition-transform duration-500 ease-in-out">
              <Image
                src="/northwestern.png" // Replace with actual logo path
                alt="Northwestern University"
                width={600}
                height={600}
                className="rounded-md"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-end p-6 bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div className="text-white text-right">
                <h3 className="text-xl font-bold">Northwestern University</h3>
                <p className="text-sm mt-1 font-semibold">Master of Computer Science & Engineering</p>
                <p className="text-sm font-semibold">Specialization in AI/ML</p>
                <p className="text-sm font-semibold">Graduated: 2024</p>
              </div>
            </div>
          </div>

          {/* North Carolina A&T State University */}
          <div className="relative group bg-ncat-gradient rounded-lg shadow p-6 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="flex-shrink-0 transform group-hover:-translate-x-[150%] transition-transform duration-500 ease-in-out">
              <Image
                src="/ncat2.png" // Replace with actual logo path
                alt="North Carolina A&T State University"
                width={250}
                height={250}
                className="rounded-md"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-end p-6 bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div className="text-white text-right">
                <h3 className="text-xl font-semibold">North Carolina A&T State University</h3>
                <p className="text-sm mt-1 font-semibold">Bachelor of Computer Engineering</p>
                <p className="text-sm font-semibold">Graduated: 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
