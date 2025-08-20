"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistika = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-white py-12 text-center">
      <h2 className=" mb-16">Naši rezultati govore...</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={10} duration={2} suffix="+" />}
          </p>
          <p className="mt-2">Godina iskustva</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={200} duration={2} suffix="+" />}
          </p>
          <p className="mt-2">Zadovoljnih klijenata</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={500} duration={2} suffix="+" />}
          </p>
          <p className="mt-2">Dokumenata izrađeno</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={3} duration={2} />}
          </p>
          <p className="mt-2">Regionalna centra</p>
        </div>
      </div>
    </section>
  );
};

export default Statistika;
