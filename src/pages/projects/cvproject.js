import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // Adjust path if needed
import { useRef } from "react";

export default function CVProject() {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Event handler to play the second video when the first one ends
  const handleVideoEnd = () => {
    if (video2Ref.current) {
      video2Ref.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Include Header */}
      <Header /> <br/><br/>

      {/* Main Content */}
      <div className="pt-16 p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold">AI-Powered Robotic Hand: Real-Time Gesture Detection and Control</h1>
        <p className="text-gray-600 dark:text-gray-300 my-4">2024</p>
        <p className="text-lg text-gray-700 dark:text-gray-300 my-4">
          In this project, I designed a system to control servos on each finger of a robotic hand, enabling eight distinct gestures and assigning an LED to each gesture using three switches on the DE-Nano10. Additionally, I developed gesture detection software using Python, enabling real-time gesture and movement detection.
        </p>

        {/* Display two videos side-by-side */}
        <div className="flex space-x-4 my-6">
          <video
            ref={video1Ref}
            src="/gesturedetection.mov" // Replace with the path to your first video
            width="400"
            height="225"
            controls
            onEnded={handleVideoEnd}
            className="rounded-lg shadow-lg"
          />
          <video
            ref={video2Ref}
            src="/robotichand.mov" // Replace with the path to your second video
            width="400"
            height="225"
            controls
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Technologies Used Section */}
        <h2 className="text-2xl font-semibold mt-8">Technologies Used</h2>
        <div className="flex space-x-2 mt-4">
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full">Python</span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full">OpenCV</span>
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full">Arduino</span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full">DE-Nano10 FPGA</span>
        </div>

        {/* The Problem Section */}
        <h2 className="text-2xl font-semibold mt-8">The Problem</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Developing an interactive robotic hand that responds accurately to human gestures requires real-time gesture detection and precise motor control. This project aimed to address this challenge, enabling a robotic hand to mimic human gestures with high accuracy.
        </p>

        {/* Research Section */}
        <h2 className="text-2xl font-semibold mt-8">Research</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          I explored various computer vision techniques to achieve reliable gesture detection. After validating the system with multiple test subjects under different lighting conditions, I optimized the algorithm for real-time performance.
        </p>

        {/* Process Section */}
        <h2 className="text-2xl font-semibold mt-8">Process</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          Using Python and OpenCV, I built a gesture recognition model that detects hand positions and sends signals to control the robotic hand&apos;s servos. The DE-Nano10 FPGA board allowed precise control of the servo motors, while Arduino was used to manage LED indicators for each gesture.
        </p>

        {/* Outcome Section */}
        <h2 className="text-2xl font-semibold mt-8">Outcome</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
          This project demonstrates the potential for AI-driven computer vision to control robotic movements with precision. Future work will focus on refining the gesture recognition model and exploring applications in assistive robotics.
        </p>

        {/* Back button */}
        <Link href="/#projects" className="text-blue-500 hover:underline mt-8 inline-block">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
