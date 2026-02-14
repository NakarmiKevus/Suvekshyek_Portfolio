"use client";

import { motion } from "framer-motion";

interface HorizontalScrollProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
}

export default function HorizontalScroll({
  children,
  direction = "left",
  delay = 0,
}: HorizontalScrollProps) {
  const initialX = direction === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
