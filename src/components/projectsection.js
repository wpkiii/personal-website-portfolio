// src/components/ProjectsSection.js
import ProjectLayout from "@/components/projectlayout"; // Change to PascalCase

export default function ProjectsSection() {
  const projects = [
    {
      title: "StoryGenie",
      description: "A Next.js Application that allows you to create a video of any famous biography in one click. 95% User Satisfaction Rate.",
      year: "2024",
      techStack: ["Next.js", "AI", "Video Generation"],
      link: "projects/storygenie",
    },
    {
      title: "Robotic Hand CV Project",
      description: "Synchronized a robotic hand to mirror real-time hand movements from a camera using OpenCV and VHDL.",
      year: "2024",
      techStack: ["OpenCV", "VHDL", "Computer Vision"],
      link: "projects/cvproject",

    },
    {
      title: "Climate Change Analysis and Prediction",
      description: "Visualized climate data and used ML techniques to predict future outcomes, achieving 90% accuracy on sea rise predictions.",
      year: "2024",
      techStack: ["Machine Learning", "Jupyter", "NASA GISTEMP"],
      link:"",
    },
    {
      title: "IoT Automated Garden Project",
      description: "Built a hydroponic garden system with IoT sensors and an app for control, fully functional for remote watering and heating.",
      year: "2023",
      techStack: ["IoT", "React Native", "Sensors"],
      link: "",
    },
    {
      title: "Machine Learning & Data Analyst Researcher",
      description: "Conducted image recognition research using TensorFlow, improving ethnic food identification accuracy by 80%.",
      year: "2020-2022",
      techStack: ["TensorFlow", "Machine Learning"],
      link: "",
    },
  ];

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 p-6 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projects</h2><br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectLayout
              key={index}
              title={project.title}
              description={project.description}
              year={project.year}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
