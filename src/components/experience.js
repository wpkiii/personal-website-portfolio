// src/components/Experience.js

export default function Experience() {
    return (
      <section id="experience" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
          <p className="text-lg text-gray-700 mb-4">
            I have worked on a variety of projects that demonstrate my skills in development, engineering, and leadership.
          </p>
  
          {/* First Experience */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Principal Software Engineer</h3>
            <p className="text-gray-600">Aerospace Corporation</p>
            <p className="mt-4 text-gray-700">
              Lead developer for an AI-driven data visualization project, implementing innovative solutions for data analytics.
            </p>
            <div className="mt-2 space-x-2">
              <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded-full">Leadership</span>
              <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded-full">AI/ML</span>
            </div>
          </div>
  
          {/* Second Experience */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Co-founder & CTO</h3>
            <p className="text-gray-600">CampusCore</p>
            <p className="mt-4 text-gray-700">
              Built a full-stack platform to streamline communication between students and advisors, enhancing academic performance.
            </p>
            <div className="mt-2 space-x-2">
              <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded-full">Full Stack</span>
              <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded-full">Education Tech</span>
            </div>
          </div>
  
          {/* Third Experience */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Data Analyst</h3>
            <p className="text-gray-600">Proctor & Gamble</p>
            <p className="mt-4 text-gray-700">
              Analyzed and optimized supply chain data, improving operational efficiency by 15%.
            </p>
            <div className="mt-2 space-x-2">
              <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded-full">Data Analysis</span>
              <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded-full">Supply Chain</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  