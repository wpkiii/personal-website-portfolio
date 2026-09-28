"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

// Loaded lazily from index.js once the page is idle, so it never competes
// with the first paint.
const ParticlesBackground = () => {
  const { theme } = useTheme();
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  // Dynamically adjust the particle and background colors based on the theme
  const particlesConfig = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: { value: theme === "dark" ? "#000000" : "#ffffff" }, // Match theme background
      },
      fullScreen: { enable: true, zIndex: -1 }, // Ensure particles stay in the background
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: !reducedMotion, mode: "push" },
          onHover: { enable: !reducedMotion, mode: "attract" },
          resize: { enable: true, delay: 0.5 },
        },
        modes: {
          attract: { distance: 300, duration: 0.6, speed: 2 },
          push: { default: true, quantity: 4 },
        },
      },
      particles: {
        // Density scales the count with screen area: ~21 on a laptop, ~5 on a phone
        number: { value: 35, density: { enable: true, width: 1920, height: 1080 } },
        color: { value: theme === "dark" ? "#ffffff" : "#000000" }, // Contrast with the background
        opacity: { value: 0.6 },
        size: { value: { min: 1, max: 4 } },
        move: { enable: !reducedMotion, speed: 2, outModes: { default: "out" } },
        links: { enable: false },
      },
      pauseOnBlur: true,
    }),
    [theme, reducedMotion]
  );

  if (!ready) return null;
  return <Particles id="tsparticles" options={particlesConfig} />;
};

export default ParticlesBackground;
