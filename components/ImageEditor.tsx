"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "@/node_modules/next/image";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";

interface ImageEditorProps {
  images: string[];
}

const ImageEditor: React.FC<ImageEditorProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div>
      <div
        className={`z-50 bg-muted-foreground fixed w-full h-screen left-0 right-0 top-0 ${
          showImage ? "block " : "hidden"
        }`}
      >
        <Image
          src={images[imageIndex]}
          alt="separe"
          fill
          className="object-contain"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={() => setShowImage(false)}
          className="absolute right-2 top-10 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
        >
          <CircleX className="w-6 h-6" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {images.map((item, i) => {
          return (
            <motion.div
              onClick={() => {
                setImageIndex(i);
                setShowImage(true);
              }}
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="aspect-square relative"
            >
              <Image
                src={item}
                alt={item}
                fill
                className="rounded-xl w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageEditor;
