//experience.js

import { useState } from "react";

const experiences = [
  {
    company: "Accenture Federal Services",
    title: "Associate Manager – AI/ML Engineer",
    date: "Mar 2026 – Present",
    location: "Washington, DC",
    link: "https://www.accenture.com/",
    bullets: [
      "AI/ML & Data Engineer specializing in full-stack development, data science, and generative AI solutions to deliver scalable, production-grade systems for federal clients.",
      "Develops frontend features, backend APIs, and extended database functionality to support new platform capabilities across the application stack.",
      "Builds data pipelines that weekly process 2TB+ of structured, semi-structured, and unstructured multimodal data, powering AI-driven correlation features across computer vision, data science, and more.",
      "Manages CI/CD and biweekly deployments (Docker, GitHub Actions, Temporal) in an air-gapped environment using an agile sprint cadence, including feature testing, while serving as direct technical liaison to the client and senior leadership.",
    ],
  },
  {
    company: "The Kelly Organization, LLC",
    title: "Founder",
    date: "Jan 2025 – Present",
    location: "Remote",
    bullets: [
      "Provide consulting and custom software/AI solutions across web & app development, data science, genAI, and computer vision. Delivered freelance web development, ETL, and other consulting projects for 15 additional clients.",
    ],
    subRoles: [
      {
        company: "Dynasty Futures",
        title: "Co-Lead Developer",
        date: "Jan 2026 – Present",
        location: "Remote",
        link: "https://www.dynastyfuturesdyn.com",
        bullets: [
          "Built a proprietary futures trading platform with over 50 customers.",
          "Worked on a team of four (two developers) to execute product design, development, CI/CD, and maintenance for the platform.",
          "The product generates roughly $5,000 weekly in profit.",
        ],
      },
      {
        company: "CampusCore",
        title: "Cofounder & CTO",
        date: "May 2024 – May 2026",
        location: "Remote",
        link: "https://campus-core.com/",
        bullets: [
          "Built an AI-driven academic advising platform and released on iOS and Android (App Store and Google Play).",
          "Led a team of 6 through product design, development, deployment, and continuous iteration based on university and advisor feedback.",
          "Secured $50,000 in funding through Microsoft for Startups.",
        ],
      },
      {
        company: "OBAI",
        title: "Contracted Developer",
        date: "Oct 2025 – Jan 2026",
        location: "Remote",
        link: "https://obai.app",
        bullets: [
          "Helped develop a proprietary computer vision algorithm for users to detect damage and generate cost estimates from the detected damage.",
        ],
      },
    ],
  },
  {
    company: "The Aerospace Corporation",
    title: "AI/ML Engineer",
    date: "Jan 2023 – Mar 2025",
    location: "Washington, DC",
    link: "https://www.aerospace.org/",
    bullets: [
      "Built and deployed Generative AI, computer vision, and ETL/ELT data pipeline solutions for space and defense mission partners.",
      "Developed RAG-based AI systems using Python, GPT-4o/Vision Instruct, GTE, Azure Cloud, and vector DBs (Weaviate/Cognitive Search/Pinecone), integrated via LangChain.",
      "Designed and maintained 15+ automated pipelines (Python/Node.js, Airflow/Jenkins) using Azure and internal relational/NoSQL databases.",
      "Delivered CV solutions, including real-time YOLO detection on edge devices, Mask-RCNN segmentation for imagery, and document OCR workflows.",
      "Co-led enterprise cloud data architecture initiative, centralizing datasets and creating standard operating procedures for secure migration protocols and access controls.",
    ],
  },
  {
    company: "Nordstrom Corporate",
    title: "Cyber Security Intern (Penetration Tester)",
    date: "June – Aug 2022",
    location: "Seattle, WA",
    link: "https://www.nordstrom.com/",
    bullets: [
      "Employed penetration testing techniques to identify and secure vulnerabilities in Nordstrom's application infrastructure.",
    ],
  },
  {
    company: "Procter & Gamble",
    title: "Data Science Intern",
    date: "May – Aug 2021",
    location: "Boston, MA",
    link: "https://us.pg.com/",
    bullets: [
      "Migrated the production data of 4 global plants to Azure Cloud, improving real-time data availability and allowing for more in-depth global decision-making.",
    ],
  },
];

function SubRole({ role }) {
  return (
    <div className="mt-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{role.date}</span>
        <h4 className="text-sm font-bold text-gray-900 dark:text-white">
          {role.title} · {role.link ? (
            <a href={role.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              {role.company}
            </a>
          ) : (
            role.company
          )}
        </h4>
      </div>
      <ul className="mt-2 space-y-1.5">
        {role.bullets.map((bullet, index) => (
          <li key={index} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="mt-1 flex-shrink-0 text-blue-500 text-xs">▹</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="experience"
      className="bg-transparent dark:bg-transparent py-16 px-4 lg:py-24 lg:px-6"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-screen-sm text-left mb-8 lg:mb-16">
          <h2 className="font-heading mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700 border-t border-b border-gray-200 dark:border-gray-700">
          {experiences.map((job, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div key={job.company}>
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors px-2 -mx-2 rounded-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8">
                    <span className="sm:w-36 flex-shrink-0 text-sm font-mono text-gray-500 dark:text-gray-400">
                      {job.date}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {job.company} · {job.location}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 sm:pl-44 animate-fadeInUp">
                    <ul className="space-y-2.5">
                      {job.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex gap-3 text-gray-600 dark:text-gray-300">
                          <span className="mt-1 flex-shrink-0 text-blue-500">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {job.subRoles?.map((role) => (
                      <SubRole key={role.company} role={role} />
                    ))}

                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-4 text-sm text-blue-500 hover:underline"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
