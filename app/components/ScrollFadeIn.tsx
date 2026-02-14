"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function BlurIn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1200 ease-out
        ${show ? "opacity-100 blur-0" : "opacity-0 blur-md"}
      `}
    >
      {children}
    </div>
  );
}
