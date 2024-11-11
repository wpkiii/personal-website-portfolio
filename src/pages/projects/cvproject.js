// src/pages/projects/CvProject.js
import Image from "next/image";
import Link from "next/link";

export default function cvproject() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">CV Project</h1>
      <p className="text-gray-600 dark:text-gray-300 my-4">2024</p>
      <p className="text-lg text-gray-700 dark:text-gray-300 my-4">
        SCV is a Next.js application that enables users to create a video biography of any famous person with a single click. The platform uses AI to generate a script, select appropriate visuals, and create a cohesive, professional video. StoryGenie has achieved a 95% user satisfaction rate due to its ease of use and the quality of the videos produced.
      </p>

      {/* Display an image representing the project */}
      <div className="my-6">
        <Image
          src="/images/storygenie-thumbnail.jpg" // Add an image for StoryGenie in the public/images folder
          alt="StoryGenie Project Thumbnail"
          width={800}
          height={450}
          className="rounded-lg shadow-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8">Technologies Used</h2>
      <div className="flex space-x-2 mt-4">
        <span className="px-3 py-1 bg-blue-500 text-white rounded-full">Next.js</span>
        <span className="px-3 py-1 bg-green-500 text-white rounded-full">AI</span>
        <span className="px-3 py-1 bg-purple-500 text-white rounded-full">Video Generation</span>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8">Project Details</h2>
      <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
        StoryGenie leverages advanced AI algorithms to generate engaging narratives based on user input. The application dynamically selects relevant images and other media to support the biography, creating a cohesive video experience. The platform is ideal for educators, content creators, and families who want to create personal video stories without extensive video editing skills.
      </p>
      <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
        Key features include:
      </p>
      <ul className="list-disc ml-6 text-md text-gray-700 dark:text-gray-300 mt-4">
        <li>Automatic script generation based on the chosen biography.</li>
        <li>Intelligent media selection to match the narrative.</li>
        <li>Simple one-click interface for generating high-quality videos.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8">User Testimonials</h2>
   

      {/* Back button */}
      <Link href="/#projects" className="text-blue-500 hover:underline mt-8 inline-block">
          ← Back to Projects
        </Link>
    </div>
  );
}
