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
    {
      title: "Stock Prediction Using Social Media",
      description:
        "Used AI sentiment analysis techniques to analyze tweets and predict stock performance, achieving a 78% accuracy rate.",
      year: "2024",
      techStack: ["AI", "Sentiment Analysis", "Twitter API"],
    },
    {
      title: "MIRA Chatbot",
      description:
        "Developed a Python-based chatbot for everyday computing tasks, with strong memory of past conversations.",
      year: "2024",
      techStack: ["Python", "Chatbot"],
    },
    {
      title: "Breast Cancer Detection ML Project",
      description:
        "Developed an ML model using medical images to detect tumors, achieving 84% accuracy.",
      year: "2023",
      techStack: ["Machine Learning", "Medical Imaging"],
    },
    {
      title: "ScholarshipSearcher",
      description:
        "Created a React Native app to help students find scholarships, helping 5 IEEE students secure funding.",
      year: "2022",
      techStack: ["React Native"],
    },
  ];

  const PROJECTS_PER_PAGE = 4;
  const pages = [];
  for (let i = 0; i < projects.length; i += PROJECTS_PER_PAGE) {
    pages.push(projects.slice(i, i + PROJECTS_PER_PAGE));
  }
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (index) => {
    setCurrentPage((index + pages.length) % pages.length);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="projects"
      className="bg-transparent dark:transparent px-6 py-16 max-w-7xl mx-auto relative"
    >
      {showCursorText && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            top: `${cursorPosition.y + 20}px`,
            left: `${cursorPosition.x + 20}px`,
          }}
        >
          <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-md">
            Click here to learn more
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Playground Heading */}
        <h2
          className="font-heading text-4xl font-bold text-left mb-8 lg:mb-16 text-gray-900 dark:text-white"
        >
          Playground
        </h2>

        {/* Project Carousel */}
        <div className="relative px-12 md:px-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((pageProjects, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"
                >
                  {pageProjects.map((project, index) => (
                    <div
                      key={index}
                      className="relative group transform transition-transform duration-300 hover:scale-105 rounded-lg p-2 dark:bg-black"
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
              ))}
            </div>
          </div>

          {pages.length > 1 && (
            <>
              <button
                aria-label="Previous projects"
                onClick={() => goToPage(currentPage - 1)}
                className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white text-2xl leading-none shadow-lg hover:bg-blue-700 hover:scale-110 transition-all"
              >
                ‹
              </button>
              <button
                aria-label="Next projects"
                onClick={() => goToPage(currentPage + 1)}
                className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white text-2xl leading-none shadow-lg hover:bg-blue-700 hover:scale-110 transition-all"
              >
                ›
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to project page ${index + 1}`}
                    onClick={() => goToPage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentPage
                        ? "bg-gray-900 dark:bg-white"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
