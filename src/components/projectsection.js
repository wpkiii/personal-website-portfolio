// src/components/ProjectsSection.js
import ProjectLayout from "@/components/projectlayout"; // Change to PascalCase

export default function projectsection() {
  const projects = [
    {
      title: "StoryGenie",
      description: "A Next.js Application that allows you to create a video of any famous biography in one click. 95% User Satisfaction Rate.",
      year: "2024",
      techStack: ["Next.js", "AI", "Video Generation"],
    },
    {
      title: "Stock Prediction Using Social Media",
      description: "Used AI Sentiment Analysis techniques to analyze tweets and predict stock performance, achieving a 78% accuracy rate.",
      year: "2024",
      techStack: ["AI", "Sentiment Analysis", "Twitter API"],
    },
    {
      title: "Robotic Hand CV Project",
      description: "Synchronized a robotic hand to mirror real-time hand movements from a camera using OpenCV and VHDL.",
      year: "2024",
      techStack: ["OpenCV", "VHDL", "Computer Vision"],
    },
    {
      title: "Climate Change Analysis and Prediction",
      description: "Visualized climate data and used ML techniques to predict future outcomes, achieving 90% accuracy on sea rise predictions.",
      year: "2024",
      techStack: ["Machine Learning", "Jupyter", "NASA GISTEMP"],
    },
    {
      title: "MIRA Chatbot",
      description: "Developed a Python-based chatbot for everyday computing tasks, with strong memory of past conversations.",
      year: "2024",
      techStack: ["Python", "Chatbot"],
    },
    {
      title: "Breast Cancer Detection ML Project",
      description: "Developed an ML model using medical images to detect tumors, achieving 84% accuracy.",
      year: "2023",
      techStack: ["Machine Learning", "Medical Imaging"],
    },
    {
      title: "IoT Automated Garden Project",
      description: "Built a hydroponic garden system with IoT sensors and an app for control, fully functional for remote watering and heating.",
      year: "2023",
      techStack: ["IoT", "React Native", "Sensors"],
    },
    {
      title: "ScholarshipSearcher",
      description: "Created a React-Native app to help students find scholarships, helping 5 IEEE students secure funding.",
      year: "2022",
      techStack: ["React Native"],
    },
    {
      title: "Machine Learning & Data Analyst Researcher",
      description: "Conducted image recognition research using TensorFlow, improving ethnic food identification accuracy by 80%.",
      year: "2020-2022",
      techStack: ["TensorFlow", "Machine Learning"],
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectLayout
              key={index}
              title={project.title}
              description={project.description}
              year={project.year}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
