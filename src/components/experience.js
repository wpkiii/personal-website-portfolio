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
                  <p className="mt-4">
                    Additionally, I contributed to the company's AI strategy by analyzing datasets and providing insights for predictive analysis, enhancing the company's decision-making process.
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

          {/* Second Team Member */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Jese Leos</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">CTO</span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Jese drives the technical strategy of the flowbite platform and brand.
              </p>
              {/* Social Icons */}
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2..." clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675..." />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Add more team members as necessary */}
        </div>  
      </div>
    </section>
  );
}
