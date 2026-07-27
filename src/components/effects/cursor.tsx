// src/components/effects/cursor.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // dot: tight, near-instant spring — reads as "attached" to the pointer
  const dotX = useSpring(x, { stiffness: 1000, damping: 60, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1000, damping: 60, mass: 0.2 });

  // ring: looser spring — trails behind for the smooth "drag" feel
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]",
      );
      setIsPointer(!!interactive);
      setLabel(interactive?.getAttribute("data-cursor") || null);
    };

    const down = () => setIsPressed(true);
    const up = () => setIsPressed(false);
    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y, isVisible]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      {/* dot */}
      <motion.div
        className="fixed left-0 top-0 rounded-full bg-foreground"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isPointer ? 6 : 7,
          height: isPointer ? 6 : 7,
          opacity: isVisible ? (isPointer && label ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      {/* ring */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border backdrop-blur-[1px]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isPointer ? (label ? 76 : 52) : 30,
          height: isPointer ? (label ? 76 : 52) : 30,
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.85 : 1,
          backgroundColor: isPointer ? "rgba(21,128,61,0.08)" : "rgba(0,0,0,0)",
          borderColor: isPointer ? "rgba(21,128,61,0.55)" : "rgba(0,0,0,0.25)",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {label && (
          <motion.span
            animate={{ opacity: isPointer ? 1 : 0, scale: isPointer ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            className="text-[10px] font-semibold uppercase tracking-wide text-foreground"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
