import { useState } from "react";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
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
      moreInfo: (
        <>
          <ul className="list-disc ml-6">
            <li>Built and automated 10+ data consolidation scripts/pipelines in Python, reducing data consolidation and structuring time by 50% and enhancing data visualization for real-time insights.</li>
            <li>Designed an ML-driven image parsing and analysis system to process tables from large datasets, increasing data ingestion speed by 40% with automated JSON data transfer to diverse databases.</li>
            <li>Recreated and enhanced a legacy flight and satellite information system, migrating 300,000+ records using Jira, Python, and SharePoint. Added advanced query functionalities with Python, Pandas, and Tableau, improving data accessibility by 45% and earning a performance bonus.</li>
            <li>Developed a proprietary web application to streamline customer queries about launch vehicles and component requirements, reducing support queries by 20% across the company.</li>
            <li>Leveraged AI to analyze historical flight data for a specific launch vehicle. Identified overlooked components with high fault frequencies, reducing inspection times by 25% for the company’s largest launch vehicle.</li>
          </ul>
        </>
      ),
    },
    {
      title: "CampusCore – CoFounder & CTO",
      location: "Remote",
      date: "May 2024 – Present",
      description:
        "Co-founded and developed an AI-powered educational platform that enhances student-advisor communication and support, while streamlining university processes.",
      link: "https://campus-core.com/",
      moreInfo: (
        <>
          <ul className="list-disc ml-6">
            <li>Conceptualized and developed a scalable educational platform for universities, enhancing student-advisor communications using React, React Native, Tailwind.css, Node.js, Azure, and MySQL.</li>
            <li>Built backend services on Azure, providing secure, scalable, and real-time access to educational resources for up to 2,000 students.</li>
            <li>Led a cross-functional team of 7, overseeing project milestones, feature implementation, and client feedback integration.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Nordstrom Corporate – Cyber Security Intern (Penetration Tester)",
      location: "Seattle, WA",
      date: "June – August 2022",
      description:
        "Conducted penetration testing using tools like BurpSuite and Metasploit to enhance Nordstrom's application security and optimize cybersecurity protocols.",
      link: "https://www.nordstrom.com/",
      moreInfo: (
        <>
          <ul className="list-disc ml-6">
            <li>Employed penetration testing tools (BurpSuite, Metasploit, Hydra) to identify and secure vulnerabilities in Nordstrom applications, enhancing cybersecurity protocols.</li>
            <li>Created a Python-based automation script with Selenium to increase data extraction efficiency, saving over 10 hours per month in manual processing time.</li>
            <li>Provided comprehensive documentation with solutions for all identified vulnerabilities during penetration testing.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Procter & Gamble – IT Data and Analytics Intern",
      location: "Boston, MA",
      date: "May – August 2021",
      description:
        "Engineered data migration processes and API-based solutions to connect global production facilities and improve real-time access to operational data.",
      link: "https://us.pg.com/",
      moreInfo: (
        <>
          <ul className="list-disc ml-6">
            <li>Engineered a process to migrate production data to Azure Cloud using REST APIs and MQTT, improving data accessibility and operational insights for 4 global plants.</li>
            <li>Developed API-based data solutions to connect distributed facilities, enhancing access to vital real-time production data across the organization.</li>
          </ul>
        </>
      ),
    },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <section id="experience" className="bg-white dark:bg-gray-900 py-8 px-4 lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-xl">
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
                hoveredCardIndex === index ? "scale-105" : ""
              } animate-colorShift ${
                index === 0
                  ? "bg-gradient-to-r from-yellow-400 to-pink-500 dark:from-orange-700 dark:to-pink-600"
                  : index === 1
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 dark:from-gray-800 dark:to-blue-900"
                  : index === 2
                  ? "bg-gradient-to-r from-green-500 to-teal-400 dark:from-gray-800 dark:to-green-700"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-600 dark:to-orange-800"
              }`}
            >
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {job.title}
              </h3>
              <span className="text-gray-500 dark:text-gray-400">{job.location}</span>
              <br />
              <span className="text-gray-500 dark:text-gray-400">{job.date}</span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{job.description}</p>

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
                  onClick={() => openModal(job.moreInfo)}
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
                  <h3 className="text-2xl font-semibold dark:text-white">More About My Role</h3>
                  <button
                    className="text-black dark:text-white"
                    onClick={() => setShowModal(false)}
                  >
                    ✖
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-300">{modalContent}</p>
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
