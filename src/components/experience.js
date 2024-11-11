import { useState } from "react";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  const experiences = [
    {
      title: "The Aerospace Corporation – Systems Engineer",
      location: "El Segundo, CA",
      date: "June 2023 – Present",
      description:
        "I currently work as a systems engineer completing many data management, data insights and analytics, pipelining, and artificial intelligence-related tasks.",
      link: "https://www.aerospace.org/",
    },
    {
      title: "CampusCore – CoFounder & CTO",
      location: "Remote",
      date: "May 2024 – Present",
      description:
        "Co-founded and developed an AI-powered educational platform that enhances student-advisor communication and support, while streamlining university processes.",
      link: "https://campus-core.com/",
    },
    {
      title: "Nordstrom Corporate – Cyber Security Intern (Penetration Tester)",
      location: "Seattle, WA",
      date: "June – August 2022",
      description:
        "Conducted penetration testing using tools like BurpSuite and Metasploit to enhance Nordstrom's application security and optimize cybersecurity protocols.",
      link: "https://www.nordstrom.com/",
    },
    {
      title: "Procter & Gamble – IT Data and Analytics Intern",
      location: "Boston, MA",
      date: "May – August 2021",
      description:
        "Engineered data migration processes and API-based solutions to connect global production facilities and improve real-time access to operational data.",
      link: "https://us.pg.com/",
    },
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {experiences.map((job, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`relative p-6 rounded-lg shadow-lg transition transform ${
                hoveredCardIndex === index
                  ? "bg-white scale-105" // White background for hovered card
                  : "bg-blue-100" // Baby blue for default and non-hovered cards
              }`}
            >
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {job.title}
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                {job.location}
              </span>
              <br />
              <span className="text-gray-500 dark:text-gray-400">
                {job.date}
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {job.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline"
                >
                  Visit Website
                </a>
                <button
                  className="text-blue-500 text-xs hover:underline"
                  onClick={() => setShowModal(true)}
                >
                  More Information
                </button>
              </div>
            </div>
          ))}

          {showModal && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg mx-auto">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    More About My Role
                  </h3>
                  <button
                    className="text-black dark:text-white"
                    onClick={() => setShowModal(false)}
                  >
                    ✖
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Additional information about this role can go here.
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
