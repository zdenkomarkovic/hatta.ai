"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className="text-4xl font-bold md:text-6xl text-primary flex flex-col  text-center">
            Šlep služba Čačak - Purić{" "}
            <span className="text-2xl font-normal md:text-3xl  text-muted-foreground">
              Do 10 tona nosivosti
            </span>
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Tražite{" "}
            <span className="font-bold">pouzdanu šlep službu u Čačku</span> i
            okolini? Naša profesionalna ekipa je dostupna 24/7 i spremna da vam
            pomogne u bilo kojoj situaciji – bilo da je u pitanju{" "}
            <span className="font-bold">
              kvar, saobraćajna nezgoda, probušena guma
            </span>{" "}
            ili bilo koji drugi problem na putu.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Naša šlep služba pruža siguran i brz transport vozila na teritoriji
            <span className="font-bold">
              Čačka, Gornjeg Milanovca, Kraljeva, Užica i cele Srbije
            </span>
            . Bez obzira na to da li vam je potreban{" "}
            <span className="font-bold">
              prevoz automobila, kombija, motocikla ili lakših teretnih vozila
            </span>
            , posedujemo specijalizovana vozila i opremu za bezbedan transport.
          </p>
          <p className="first-letter:pl-6 text-lg md:text-3xl">
            Kontaktirajte nas 24/7 i obezbedite siguran prevoz vašeg vozila.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/puric.jpg"}
            width={500}
            height={800}
            alt="slep puric cacak "
            className="object-cover h-[300px] md:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
