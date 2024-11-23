import { useState } from "react";
import ProjectLayout from "@/components/projectlayout";

export default function ProjectsSection() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursorText, setShowCursorText] = useState(false);

  const projects = [
    {
      title: "StoryGenie",
      description:
        "A Next.js Application that allows you to create a video of any famous biography in one click. 95% User Satisfaction Rate.",
      year: "2024",
      techStack: ["Next.js", "AI", "Video Generation"],
      link: "projects/storygenie",
      imageSrc: "/storygeniegif.gif",
    },
    {
      title: "CV-Powered Robotic Hand",
      description:
        "Synchronized a robotic hand to mirror real-time hand movements from a camera using OpenCV and VHDL.",
      year: "2024",
      techStack: ["OpenCV", "VHDL", "Computer Vision"],
      link: "projects/cvproject",
      imageSrc: "/detectiongif.gif",
    },
    {
      title: "Climate Change Analysis and Prediction",
      description:
        "Visualized climate data and used ML techniques to predict future outcomes, achieving 90% accuracy on sea rise predictions.",
      year: "2024",
      techStack: ["Machine Learning", "Jupyter", "NASA GISTEMP"],
      link: "projects/climate",
      imageSrc: "/climate.mp4",
    },
    {
      title: "IoT Automated Garden Project",
      description:
        "Constructed a hydroponic garden system with various sensors and actuators utilizing IoT technology via app for control. Fully functional app with remote/automatic watering, lighting, heating, humidity control, and ground temperature maintenance capabilities.",
      year: "2023",
      techStack: ["IoT", "React Native", "Sensors"],
      link: "projects/garden",
      imageSrc: "/gardengif.gif",
    },
  ];

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 p-6 max-w-7xl mx-auto relative"
    >
      {showCursorText && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            top: `${cursorPosition.y + 20}px`,
            left: `${cursorPosition.x + 20}px`,
          }}
        >
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-md">
            Click here to learn more
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Projects
        </h2>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group transform transition-transform duration-300 hover:scale-105 rounded-lg p-4 dark:bg-gray-800"
              style={{
                cursor: "url(/middlefinger.png), auto",
              }}
              onMouseEnter={() => setShowCursorText(true)}
              onMouseLeave={() => setShowCursorText(false)}
              onMouseMove={handleMouseMove}
            >
              <ProjectLayout
                title={project.title}
                description={project.description}
                year={project.year}
                techStack={project.techStack}
                link={project.link}
                imageSrc={project.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
