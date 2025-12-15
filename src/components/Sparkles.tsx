"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

interface SparkleProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Sparkle = ({ color = "#FFC700", size, style }: SparkleProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      style={style}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: random(1000, 2000) / 1000,
        repeat: Infinity,
        repeatDelay: random(200, 1000) / 1000,
      }}
    >
      <path
        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
        fill={color}
      />
    </motion.svg>
  );
};

export const Sparkles = ({
  color = "var(--primary)",
  children,
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  const [sparkles, setSparkles] = useState<
    { id: string; createdAt: number; style: any; size: number }[]
  >([]);

  useEffect(() => {
    const generateSparkle = () => {
      const sparkle = {
        id: Math.random().toString(36).substr(2, 9),
        createdAt: Date.now(),
        size: random(10, 20),
        style: {
          top: random(0, 100) + "%",
          left: random(0, 100) + "%",
          zIndex: 2,
          position: "absolute" as const,
        },
      };

      setSparkles((current) => {
        const now = Date.now();
        const next = current.filter((sp) => now - sp.createdAt < 750);
        next.push(sparkle);
        return next;
      });
    };

    const interval = setInterval(generateSparkle, random(100, 400));
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block">
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <div className="relative">{children}</div>
    </div>
  );
};
