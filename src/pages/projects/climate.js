import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // Adjust path if needed

export default function Climate() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Include Header */}
      <Header /> <br/><br/>

      {/* Main Content */}
      <div className="pt-16 p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold">Visualizing Climate Change Data using AI</h1>
        <p className="text-gray-600 dark:text-gray-300 my-4"> 2024</p>
        <div className="group flex space-x-4">
              <a href="https://github.com/wpkiii/AI4ClimateChange" target="_blank" rel="noreferrer">
                <Image src="/icons/github.svg" alt="GitHub" width={30} height={30} className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert" />
              </a>
              
            </div><br/>
        <p className="text-lg text-gray-700 dark:text-gray-300 my-4">
          Climate change is one of the most pressing global challenges of our time, affecting ecosystems, economies, and societies. As effects become increasingly evident, new insights into environmental data are crucial. This project utilizes AI to visualize temperature and sea level climate variability, using datasets like NASA’s GISTEMP and EPA’s sea level records to analyze changes from the 1880s onward.
        </p>

        {/* Display the video representing the project */}
        <div className="my-6">
          <video
            src="/climate.mp4" // Ensure this video is in the public directory
            width={800}
            height={450}
            controls
            className="rounded-lg shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Technologies Used Section */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            Python
          </span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            Seaborn
          </span>
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            Pytorch
          </span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            NASA GISTEMP
          </span>
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            EPA Dataset
          </span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            Linear Regression
          </span>
        </div>

        {/* Project Sections */}
        <h2 className="text-2xl font-semibold mt-8">Introduction/Context</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Climate change impacts are profound, and understanding climate (long-term patterns) versus weather (short-term changes) is essential. This project distinguishes these to emphasize climate variability over decades.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Visualizing Temperature Climate Variability</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Using NASA&apos;s GISTEMP v4 dataset, we analyzed global surface temperature changes since the 1880s. This dataset, combining NOAA&apos;s GHCN v4 and ERSST v5, provides insights into temperature trends and variability over the past 40 years.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Visualizing Sea Level Climate Variability</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Building on global warming insights, sea level changes from 1880-2000 were visualized using EPA data. A linear regression model provides future estimates on sea level rise.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Future Directions</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Future plans include integrating more diverse datasets, using AI to handle larger datasets, and implementing predictive modeling for local weather/climate insights.
        </p>

        {/* Back button */}
        <Link href="/#projects" className="text-blue-500 hover:underline mt-8 inline-block">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
