"use client";

import React from "react";
import { tim } from "@/constants/index";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import Image from "@/node_modules/next/image";

const NasTim = () => {
  return (
    <div className="">
      <div className="container px-4 md:px-40 mx-auto py-7 md:py-12 space-y-10 border-t border-primary">
        <h2 className="">Naš Tim</h2>

        <div className=" flex flex-col gap-4 md:gap-4  overflow-hidden">
          {tim.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Naizmenično levo/desno
                whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } w-full`}
              >
                <Card className="w-full  md:w-3/4 shadow-lg relative overflow-hidden">
                  <svg
                    className="absolute top-0 left-0 w-1/2 h-full text-card"
                    viewBox="0 0 256 150"
                    preserveAspectRatio="none"
                  >
                    <polygon points="0,0 200,160 0,160 0,160" fill="#f5f5f5" />
                  </svg>

                  <CardContent className="flex items-center justify-around">
                    <div className=" z-10">
                      <h3 className="md:py-10">{item.name}</h3>
                      <p>{item.title}</p>
                    </div>
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      alt={"zastita na radu"}
                      className="rounded-full object-cover w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NasTim;
