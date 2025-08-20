"use client";

import React from "react";

const CardsKosina = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 mx-auto space-y-5 flex gap-7">
        <svg width="256" height="160" viewBox="0 0 256 160">
          <polygon points="0,0 256,0 192,160 0,160" fill="#3b82f6" />
        </svg>
        <div className="w-64 h-40 bg-blue-500 clip-custom"></div>

        <style jsx>{`
          .clip-custom {
            clip-path: polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%);
          }
        `}</style>
      </div>{" "}
    </div>
  );
};

export default CardsKosina;
