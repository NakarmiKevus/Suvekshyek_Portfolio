"use client";

import { motion } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
}

export default function BlurFade({ children, delay = 0 }: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
