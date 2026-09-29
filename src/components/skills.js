import { Fragment, useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/sectionheader";
import { useReveal } from "@/animations/useReveal";

// Stack laid out as the ML pipeline it's used in (data → model → deploy),
// with the supporting skills underneath. Edit the lists here.
const pipeline = [
  {
    stage: "Data",
    blurb: "Pipelines & storage",
    skills: ["Airflow", "Temporal", "Jenkins", "Redis", "ETL / ELT", "Relational & NoSQL DBs", "Node.js"],
  },
  {
    stage: "Model",
    blurb: "AI / ML & GenAI",
    skills: [
      "PyTorch", "OpenCV", "YOLO", "Mask R-CNN", "OCR", "LLMs", "GPT-4o", "Gemini", "RAG", "MCP",
      "LangChain", "Prompt Engineering", "Weaviate", "Pinecone", "Azure Cognitive Search",
    ],
  },
  {
    stage: "Deploy",
    blurb: "Cloud & ops",
    skills: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD", "MLOps", "Air-gapped deployments"],
  },
];

const supporting = [
  { group: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "VHDL", "Verilog"] },
  { group: "Build", skills: ["Next.js", "React Native", "Tailwind", "FastAPI", "Flask", "REST APIs", "Git / GitHub"] },
  { group: "Hardware", skills: ["FPGAs", "ROS", "Embedded Systems", "Linux"] },
];

function Chips({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <li
          key={skill}
          className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-900/70 text-sm text-gray-800 dark:text-gray-200"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

// Link between two stages. A small dot travels along it, like data moving
// down the pipeline (CSS in globals.css; only runs while the section is on
// screen, and never under reduced motion).
function Connector({ delay }) {
  return (
    <div aria-hidden="true" className="skills-connector" style={{ "--pulse-delay": delay }}>
      <span className="skills-pulse" />
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [onScreen, setOnScreen] = useState(false);
  useReveal(sectionRef);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      data-pulsing={onScreen}
      className="px-6 py-16 lg:py-24 max-w-7xl mx-auto"
    >
      <SectionHeader index="03" title="Skills" />

      {/* Pipeline: stages side by side on desktop, stacked on mobile */}
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {pipeline.map((step, i) => (
          <Fragment key={step.stage}>
            {i > 0 && <Connector delay={`${(i - 1) * 1.2}s`} />}
            <div data-reveal className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 p-5">
              <p className="font-mono text-xs tracking-wider text-gray-600 dark:text-gray-400">
                {String(i + 1).padStart(2, "0")} · {step.blurb}
              </p>
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mt-1 mb-4">{step.stage}</h3>
              <Chips items={step.skills} />
            </div>
          </Fragment>
        ))}
      </div>

      {/* Supporting skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {supporting.map(({ group, skills }) => (
          <div key={group} data-reveal>
            <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white mb-3">{group}</h3>
            <Chips items={skills} />
          </div>
        ))}
      </div>
    </section>
  );
}
