import { motion } from "motion/react";

interface ParticlesProps {
  count?: number;
  color?: string;
  speedMultiplier?: number;
}

export default function Particles({ count = 18, color = "bg-[#2BC48A]", speedMultiplier = 1 }: ParticlesProps) {
  const particles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; // 2px to 6px
        const startX = Math.random() * 100; // in %
        const startY = Math.random() * 100; // in %
        
        // Custom animation parameters for a natural floating look
        const duration = (Math.random() * 20 + 20) / speedMultiplier; // 20s to 40s
        const movementX = Math.random() * 80 - 40; // travel up to 40px left or right
        const movementY = Math.random() * -120 - 40; // travel upwards

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-15 blur-[1px] ${color}`}
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              x: [0, movementX, -movementX, 0],
              y: [0, movementY, movementY / 2, 0],
              opacity: [0.08, 0.25, 0.12, 0.08],
              scale: [1, 1.25, 0.85, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
