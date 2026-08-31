// src/components/effects/tilt-card.tsx
"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type NativeDivProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
>;

interface TiltCardProps extends NativeDivProps {
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
  ...rest
}: TiltCardProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

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
  const liftY = useSpring(hovered && lift && !isTouch ? -6 : 0, {
    stiffness: 260,
    damping: 24,
  });

  const glowBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(280px circle at ${x * 100}% ${y * 100}%, rgba(21,128,61,0.14), transparent 70%)`,
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    if (isTouch) return;
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  function handleTouchStart() {
    setIsTouch(true);
    setPressed(true);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  function handleTouchEnd() {
    setPressed(false);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      animate={{ scale: pressed ? 0.98 : 1 }}
      style={{
        rotateX: isTouch ? 0 : rotateX,
        rotateY: isTouch ? 0 : rotateY,
        y: liftY,
        transformPerspective: 900,
      }}
      transition={{ scale: { duration: 0.15, ease: "easeOut" } }}
      className={cn("relative [transform-style:preserve-3d]", className)}
      {...rest}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{ background: glowBackground }}
          animate={{ opacity: hovered || pressed ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
      )}
      <div style={{ transform: "translateZ(0)" }}>{children}</div>
    </motion.div>
  );
}
