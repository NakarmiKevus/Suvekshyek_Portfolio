"use client";
import React, { useState } from "react";

export function ReadMore({ descriptions }: { descriptions: string[] }) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? descriptions : descriptions.slice(0, 3);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ul className="text-base sm:text-lg text-gray-400 list-disc list-inside space-y-1">
        {visibleItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {descriptions.length > 3 && (
        <span
          onClick={() => setShowAll(!showAll)}
          className="text-blue-400 cursor-pointer hover:underline text-sm mt-1 inline-block"
        >
          {showAll ? "Read Less" : "Read More"}
        </span>
      )}
    </div>
  );
}
