import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // Adjust path if needed

export default function StoryGenie() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Include Header */}
      <Header /> <br/><br/>

      {/* Main Content */}
      <div className="pt-16 p-8 max-w-4xl mx-auto"> {/* Added pt-16 for padding */}
        <h1 className="text-4xl font-extrabold">StoryGenie</h1>
        <p className="text-gray-600 dark:text-gray-300 my-4">2024</p>
        <p className="text-lg text-gray-700 dark:text-gray-300 my-4">
          StoryGenie is a Next.js application that enables users to create a video biography of any person of notoriety with a single click. The platform uses AI to generate a script, select appropriate visuals, and create a cohesive, professional video. StoryGenie has achieved a 90% success rate, even with niche figures.
        </p>

        {/* Display an image representing the project */}
        <div className="my-6">
          <Image
            src="/storygeniegif.gif" // Ensure this GIF is in the public/images folder
            alt="StoryGenie Project Thumbnail"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

                {/* Technologies Used Section */}
        <h2 className="text-2xl font-semibold mt-8">Technologies Used</h2>
        <div className="flex space-x-2 mt-4">
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full">Next.js</span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full">RAG/LLM</span>
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full">Webscraping/API</span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full">Google Cloud</span>
          <span className="px-3 py-1 bg-purple-500 text-white rounded-full">Remotion</span>
        </div>

        {/* The Problem Section */}
        <h2 className="text-2xl font-semibold mt-8">The Problem</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Creating high-quality video biographies typically requires substantial time, expertise in video editing, and access to diverse resources. People often lack the tools to tell the stories of notable individuals effectively and creatively. StoryGenie was created to simplify this process, empowering users to produce professional-quality videos effortlessly.
        </p>

        {/* Research Section */}
        <h2 className="text-2xl font-semibold mt-8">Research</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          To validate this need, I conducted interviews with educators, historians, and content creators, who confirmed that producing educational and biographical content is time-consuming and costly. Many expressed the need for a solution that would allow them to tell compelling stories without requiring extensive editing skills.
        </p>

        {/* Process Section */}
        <h2 className="text-2xl font-semibold mt-8">Process</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          StoryGenie was built using a combination of AI technologies, including script generation algorithms, media selection tools, and video assembly processes. After initial testing, I iterated on the interface to make it simple and intuitive. Users can input a name, and StoryGenie automatically creates a script, selects relevant images, and assembles the video in just a few minutes.
        </p>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Building StoryGenie involved learning and integrating technologies like Next.js, RAG/LLM, and Google Cloud for data management. The project was challenging but allowed me to create a robust and user-friendly platform.
        </p>

        {/* Outcome / Future of StoryGenie Section */}
        <h2 className="text-2xl font-semibold mt-8">Outcome</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          StoryGenie has become a valuable tool for educators, content creators, and families who want to create high-quality biographies quickly. As of now, the platform has a 90% user satisfaction rate and continues to grow with feedback from users. Moving forward, I plan to integrate more advanced AI features and expand the media library to support a wider range of topics and formats.
        </p>

        {/* Back button */}
        <Link href="/#projects" className="text-blue-500 hover:underline mt-8 inline-block">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
