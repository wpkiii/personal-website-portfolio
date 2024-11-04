//experience.js

import Image from 'next/image';
import { useState } from "react";

export default function Experience() {
    const [showModal, setShowModal] = useState(false);

  return (
    <section id="experience"className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Experience</h2>
        <br/>
        </div> 

        {/* Grid Layout */}
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                   {/* First Work Experience */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 p-5 relative">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">The Aerospace Corporation – Systems Engineer</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">El Segundo, CA</span><br />
              <span className="text-gray-500 dark:text-gray-400">June 2023 – Present</span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                I currently work as a systems engineer completing many data management, data insights and analytics, pipelining, and artificial intelligence-related tasks.
              </p>
              <br/>

              {/* Bottom Section with Links */}
              <div className="flex justify-between items-center mt-4">
                {/* Left: Company Website Link */}
                <a href="https://www.aerospace.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
                  Visit Website
                </a>

                {/* Right: More Information Modal Trigger */}
                <button
                  className="text-blue-500 text-xs hover:underline"
                  onClick={() => setShowModal(true)}
                >
                  More Information
                </button>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal ? (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold">More About My Role</h3>
                  <button
                    className="text-black"
                    onClick={() => setShowModal(false)}
                  >
                    ✖
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">
                    During my time at The Aerospace Corporation, I worked on several data pipelines and infrastructure projects. These involved creating scalable analytics solutions, working with AI models to optimize data flow, and managing sensitive data across various systems. My work also included integrating machine learning models into existing systems and developing tools for pipeline automation.
                  </p>
                
                    {/* Original Line */}
                  <p className="mt-4">
  I&apos;m currently working as a systems engineer completing many data management, data insights and analytics, pipelining, and artificial intelligence-related tasks.
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
          ) : null}

        {/* Second Work Experience */}
<div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 p-5 relative">
  <div>
    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <a href="#">CampusCore – CoFounder & CTO</a>
    </h3>
    <span className="text-gray-500 dark:text-gray-400">Remote</span><br />
    <span className="text-gray-500 dark:text-gray-400">May 2024 – Present</span>
    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
    Co-founded and developed an AI-powered educational platform that enhances student-advisor communication and support, while streamlining university processes.
    </p>
 
    <br/>

    {/* Bottom Section with Links */}
    <div className="flex justify-between items-center mt-4">
      {/* Left: Company Website Link */}
      <a href="https://campus-core.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
        Visit Website
      </a>

      {/* Right: More Information Modal Trigger */}
      <button
        className="text-blue-500 text-xs hover:underline"
        onClick={() => setShowModal(true)}
      >
        More Information
      </button>
    </div>
  </div>
</div>

{/* Modal */}
{showModal ? (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">More About My Role</h3>
        <button
          className="text-black"
          onClick={() => setShowModal(false)}
        >
          ✖
        </button>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          As CoFounder & CTO, I led the creation of CampusCore, a platform built with React, React Native, Tailwind CSS, Node.js, Azure, and MySQL. The platform integrates AI-driven features to enhance student success and advisor support.
        </p>
        <p className="mt-4">
        The platform integrates AI-driven tools that provide personalized support to students and assist advisors in making data-driven decisions. We prioritized inclusivity and accessibility, ensuring the platform is easy to use for all.<br/><br/> More than 75+ reponses from students and advisors nationwide allowed us to continually improve and address common challenges faced by universities.
        
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
) : null}

{/* Nordstrom Work Experience */}
<div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 p-5 relative">
  <div>
    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <a href="#">Nordstrom Corporate – Cyber Security Intern (Penetration Tester)</a>
    </h3>
    <span className="text-gray-500 dark:text-gray-400">Seattle, WA</span><br />
    <span className="text-gray-500 dark:text-gray-400">June – August 2022</span>
    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
      Conducted penetration testing using tools like BurpSuite and Metasploit to enhance Nordstrom's application security and optimize cybersecurity protocols.
    </p>

    {/* Bottom Section with Links */}
    <div className="flex justify-between items-center mt-4">
      {/* Left: Company Website Link */}
      <a href="https://www.nordstrom.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
        Visit Website
      </a>

      {/* Right: More Information Modal Trigger */}
      <button
        className="text-blue-500 text-xs hover:underline"
        onClick={() => setShowModal(true)}
      >
        More Information
      </button>
    </div>
  </div>
</div>

{/* Modal */}
{showModal ? (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">More About My Role</h3>
        <button
          className="text-black"
          onClick={() => setShowModal(false)}
        >
          ✖
        </button>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          During my internship at Nordstrom, I leveraged tools such as BurpSuite, Metasploit, and Hydra to identify and resolve vulnerabilities in critical applications. I developed a Python-based automation script with Selenium, which saved over 10+ hours of manual data extraction per month.
        </p>
        <p className="mt-4">
          I also provided comprehensive documentation for each vulnerability, along with recommended solutions, improving the overall security posture of the organization.
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
) : null}

{/* Procter & Gamble Work Experience */}
<div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 p-5 relative">
  <div>
    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <a href="#">Procter & Gamble – IT Data and Analytics Intern</a>
    </h3>
    <span className="text-gray-500 dark:text-gray-400">Boston, MA</span><br />
    <span className="text-gray-500 dark:text-gray-400">May – August 2021</span>
    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
      Engineered data migration processes and API-based solutions to connect global production facilities and improve real-time access to operational data.
    </p>

    {/* Bottom Section with Links */}
    <div className="flex justify-between items-center mt-4">
      {/* Left: Company Website Link */}
      <a href="https://us.pg.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
        Visit Website
      </a>

      {/* Right: More Information Modal Trigger */}
      <button
        className="text-blue-500 text-xs hover:underline"
        onClick={() => setShowModal(true)}
      >
        More Information
      </button>
    </div>
  </div>
</div>

{/* Modal */}
{showModal ? (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">More About My Role</h3>
        <button
          className="text-black"
          onClick={() => setShowModal(false)}
        >
          ✖
        </button>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          At Procter & Gamble, I developed a process to migrate production data to Azure Cloud, utilizing REST APIs and MQTT to enhance data accessibility and improve operational insights across 4 global plants.
        </p>
        <p className="mt-4">
          I also engineered API-based data solutions, connecting distributed facilities and enabling real-time access to critical production data, which improved organizational efficiency and decision-making.
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
) : null}


          {/* Add more team members as necessary */}
        </div>  
      </div>
    </section>
  );
}
