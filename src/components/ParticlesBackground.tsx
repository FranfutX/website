import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 1.5, random: true },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
      }}
    />
  );
}
