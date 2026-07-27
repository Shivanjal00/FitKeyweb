// src/components/effects/tilt-card.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
  glow?: boolean;
  lift?: boolean;
}

export function TiltCard({
  children,
  className,
  tiltStrength = 6,
  glow = true,
  lift = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [tiltStrength, -tiltStrength]),
    { stiffness: 220, damping: 22 },
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-tiltStrength, tiltStrength]),
    { stiffness: 220, damping: 22 },
  );
  const liftY = useSpring(hovered && lift ? -6 : 0, {
    stiffness: 260,
    damping: 24,
  });

  const glowBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(280px circle at ${x * 100}% ${y * 100}%, rgba(21,128,61,0.14), transparent 70%)`,
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, y: liftY, transformPerspective: 900 }}
      className={cn("relative [transform-style:preserve-3d]", className)}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{ background: glowBackground }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
      )}
      <div style={{ transform: "translateZ(0)" }}>{children}</div>
    </motion.div>
  );
}
