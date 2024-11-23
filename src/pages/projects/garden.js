// garden.js

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // Adjust path if needed

export default function Garden() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Include Header */}
      <Header />
      <br />
      <br />

 {/* Main Content */}
<div className="pt-16 p-8 max-w-4xl mx-auto">
  <h1 className="text-4xl font-extrabold">EZGrow - IoT Closed Garden</h1>
  <p className="text-gray-600 dark:text-gray-300 my-4">2023</p>
  <div className="group flex space-x-4">
    <a
      href="/GardenDoc.docx" // Replace with the actual path to your file in the public folder
      download="TreyKellyEZGrow.docx" // Name of the file when downloaded
      className="flex items-center space-x-2"
    >
      <Image
        src="/icons/download.svg"
        alt="Download"
        width={30}
        height={30}
        className="transition-transform transform group-hover:scale-125 duration-200 dark:filter dark:invert"
      />

    </a>
  </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 my-6">
  {/* Text Section */}
  <div className="flex-1">
    <p className="text-lg text-gray-700 dark:text-gray-300 my-4">
      EZGrow is an automated plant growth system designed to grow crops
      indoors without human intervention. By combining IoT and embedded
      systems, EZGrow integrates multiple sensors and actuators to maintain
      optimal growing conditions for crops like basil. The system is
      sustainable, space-efficient, and affordable, offering a better
      solution compared to existing products on the market.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1">
    <Image
      src="/gardengif.gif" // Ensure this image is in the public/images folder
      alt="EZGrow Prototype"
      width={350}
      height={300}
      className="rounded-lg shadow-lg"
    />
  </div>
</div>

        {/* Technologies Used Section */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            React Native
          </span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            ESP32
          </span>
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            Sensors
          </span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
           Actuators
          </span>
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            Circuit Design
          </span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            Circuit Analysis
          </span>
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center justify-center w-24 h-10">
            Carpentry
          </span>
        </div>

        {/* Image Gallery Section */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">
          Image Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Image
            src="/ezgrow.jpg"
            alt="EZGrow Sensors Setup"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/electronics.jpg"
            alt="EZGrow Terrarium Enclosure"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/serial.jpg"
            alt="EZGrow Process Diagram"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/app.jpg"
            alt="EZGrow Final Outcome"
            width={200}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* The Problem Section */}
        <h2 className="text-2xl font-semibold mt-8">The Problem</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Modern agriculture cannot meet the rising demand for food, especially
          with limited space and resources in urban areas. Existing products
          for indoor farming are often expensive, lack versatility, or require
          significant user intervention.
        </p>

        {/* Research Section */}
        <h2 className="text-2xl font-semibold mt-8">Research</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Extensive research was conducted to determine optimal plant
          conditions, sensor selection, and efficient system design. EZGrow was
          benchmarked against commercial products like the Gardyn Homekit 2.0,
          providing comparable or superior features at a fraction of the cost.
        </p>

        {/* Process Section */}
        <h2 className="text-2xl font-semibold mt-8">Process</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          The system uses sensors to monitor environmental factors like
          temperature, humidity, and soil moisture. Actuators respond to these
          inputs, ensuring plants receive water, light, and ideal growing
          conditions. The IoT interface allows remote monitoring and control
          through a mobile app.
        </p>

        {/* Outcome / Future of EZGrow Section */}
        <h2 className="text-2xl font-semibold mt-8">Outcome</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          EZGrow successfully achieved a functional prototype capable of
          maintaining an optimal environment for plants like basil. The system
          can serve as a sustainable and accessible solution for urban farming,
          with potential future enhancements including advanced AI features for
          plant diagnostics.
        </p>

        {/* Back button */}
        <Link
          href="/#projects"
          className="text-blue-500 hover:underline mt-8 inline-block"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
