//experience.js

import { useState } from "react";
import Image from "next/image";

const experiences = [
  {
    company: "Accenture Federal Services",
    logo: "/Accenture.png",
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
    logo: "/TKO_B_border_box.png",
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
    logo: "/aerospacelogo.png",
    title: "Member of Technical Staff - AI/ML Engineer",
    date: "May 2023 – Mar 2026",
    location: "El Segundo, CA / Chantilly, VA",
    link: "https://www.aerospace.org/",
    bullets: [
      "Progressed from a part-time Systems Engineer role into a full-time Member of Technical Staff position, delivering AI/ML, data, and cloud solutions for space, defense, and national security mission partners.",
    ],
    subRoles: [
      {
        company: "The Aerospace Corporation",
        title: "Member of Technical Staff – AI/ML Engineer",
        date: "Jan 2025 – Mar 2026",
        location: "Chantilly, VA · Hybrid",
        bullets: [
          "Built and deployed Generative AI, computer vision, and ETL/ELT data pipeline solutions for space and defense mission partners.",
          "Developed RAG-based AI systems using Python, GPT-4o/Vision Instruct, GTE, Azure Cloud, and vector DBs (Weaviate/Cognitive Search/Pinecone), integrated via LangChain.",
          "Designed and maintained 15+ automated pipelines (Python/Node.js, Airflow/Jenkins) using Azure and internal relational/NoSQL databases.",
          "Delivered CV solutions, including real-time YOLO detection on edge devices, Mask-RCNN segmentation for imagery, and document OCR workflows.",
          "Co-led enterprise cloud data architecture initiative, centralizing datasets and creating standard operating procedures for secure migration protocols and access controls.",
        ],
      },
      {
        company: "The Aerospace Corporation",
        title: "System Engineer (Part-Time)",
        date: "May 2023 – Dec 2024",
        location: "El Segundo, CA · On-site",
        bullets: [
          "Created a web application for 3D visualization of launch vehicles at a component level.",
          "Created ETL scripts processing contract data through to real-time satellite information.",
          "Used sentiment analysis on legacy flight data to detect potential failures within launch vehicle components.",
        ],
      },
    ],
  },
  {
    company: "Nordstrom Corporate",
    logo: "/Nordstrom-Symbol.png",
    title: "Cybersecurity Engineer - Penetration Tester",
    date: "June – Aug 2022",
    location: "Seattle, WA",
    link: "https://www.nordstrom.com/",
    bullets: [
      "Employed penetration testing techniques to identify and secure vulnerabilities in Nordstrom's application infrastructure.",
    ],
  },
  {
    company: "Procter & Gamble",
    logo: "/ProctornGamble.png",
    title: "Data Science Intern",
    date: "May – Aug 2021",
    location: "Boston, MA",
    link: "https://us.pg.com/",
    bullets: [
      "Migrated the production data of 4 global plants to Azure Cloud, improving real-time data availability and allowing for more in-depth global decision-making.",
    ],
  },
];

function Highlights({ items, compact }) {
  return (
    <ul
      className={`relative border-l-2 border-gray-200 dark:border-gray-700 ${
        compact ? "mt-2 pl-4 space-y-2" : "pl-5 space-y-4"
      }`}
    >
      {items.map((item, index) => (
        <li key={index} className="relative">
          <span
            className={`absolute top-1.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-900 ${
              compact ? "-left-[1.15rem] w-2 h-2" : "-left-[1.45rem] w-2.5 h-2.5"
            }`}
          />
          <span className={compact ? "text-sm text-gray-600 dark:text-gray-300" : "text-gray-600 dark:text-gray-300"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

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
      <Highlights items={role.bullets} compact />
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
          <h2 className="font-heading mb-4 text-4xl font-bold text-gray-900 dark:text-white">
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
                    <div className="flex items-center gap-3">
                      {job.logo && (
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={36}
                          height={36}
                          className="flex-shrink-0 rounded-md object-contain bg-white"
                        />
                      )}
                      <div>
                        <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {job.company} · {job.location}
                        </p>
                      </div>
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
                    <Highlights items={job.bullets} />

                    {job.subRoles?.map((role) => (
                      <SubRole key={role.title} role={role} />
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
