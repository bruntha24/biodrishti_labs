import { useMemo } from "react";

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

/** Reusable rising-particle field. */
export const ParticleField = ({ count = 22, className = "" }: ParticleFieldProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 10,
        size: 1 + Math.random() * 2,
        x: (Math.random() - 0.5) * 60,
        opacity: 0.25 + Math.random() * 0.45,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 block rounded-full bg-primary-glow/70"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `particle-rise ${p.duration}s linear ${p.delay}s infinite`,
            // @ts-expect-error custom CSS vars
            "--p-x": `${p.x}px`,
            "--p-opacity": p.opacity,
            filter: "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
};