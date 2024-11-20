// src/components/Education.js
import Image from 'next/image';

export default function Education() {
  return (
    <section id="education" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
  {/* Modify max-w-screen-sm to be more responsive */}
  <div className="mx-auto text-center mb-8 lg:mb-16 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-screen-sm">
    <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Education</h2>
  </div>

  {/* Grid Layout for Logos with Gradients */}
  <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-1 md:grid-cols-2">
          
          {/* Northwestern University Logo with Purple-to-White Gradient */}
          <div className="relative group bg-northwestern-gradient rounded-lg shadow p-6 flex items-center justify-center">
            <Image
              src="/northwestern.png" // Replace with actual logo path
              alt="Northwestern University"
              width={600}
              height={600}
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="text-white p-4 text-center">
                <h3 className="text-xl font-bold">Northwestern University</h3>
                <p className="text-sm mt-1">Master of Computer Science & Engineering</p>
                <p className="text-sm">Specialization in AI/ML</p>
                <p className="text-sm">Graduated 2024</p>
              </div>
            </div>
          </div>

          {/* North Carolina A&T State University Logo with Gold-to-Navy Gradient */}
          <div className="relative group bg-ncat-gradient rounded-lg shadow p-6 flex items-center justify-center">
            <Image
              src="/ncat2.png" // Replace with actual logo path
              alt="North Carolina A&T State University"
              width={250}
              height={250}
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="text-white p-4 text-center">
                <h3 className="text-xl font-bold">North Carolina A&T State University</h3>
                <p className="text-sm mt-1">Bachelor of Computer Engineering</p>
                <p className="text-sm">Graduated: 2023</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
