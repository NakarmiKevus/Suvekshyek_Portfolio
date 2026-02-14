"use client";

import { motion } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function ImageReveal({ children, delay = 0 }: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}
