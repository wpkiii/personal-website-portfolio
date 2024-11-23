"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const { theme } = useTheme(); // Access the current theme

  const particlesInit = async (engine) => {
    await loadSlim(engine); // Initialize slim version
  };

  // Dynamically adjust the particle and background colors based on the theme
  const particlesConfig = {
    autoPlay: true,
    background: {
      color: { value: theme === "dark" ? "#000000" : "#ffffff" }, // Match theme background
    },
    fullScreen: { enable: true, zIndex: -1 }, // Ensure particles stay in the background
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "attract" }, // Use attract on hover
        resize: { enable: true, delay: 0.5 },
      },
      modes: {
        attract: { distance: 300, duration: 0.6, speed: 2 }, // Increase attraction distance and speed
        push: { default: true, quantity: 4 },
        slow: { factor: 2, radius: 150 }, // Adjust slow mode to be less intense
      },
    },
    particles: {
      number: { value: 80, density: { enable: true, width: 1920, height: 1080 } },
      color: { value: theme === "dark" ? "#ffffff" : "#000000" }, // Contrast with the background
      opacity: { value: 0.6 }, // Slightly increase opacity for visibility
      size: { value: { min: 1, max: 4 } }, // Slightly reduce maximum size
      move: { enable: true, speed: 2, outModes: { default: "out" } }, // Slow particle movement
      links: { enable: true, distance: 150, opacity: 0.5, color: { value: theme === "dark" ? "#ffffff" : "#000000" } },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  };

  console.log("Current theme:", theme);

  return <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />;
};

export default ParticlesBackground;
