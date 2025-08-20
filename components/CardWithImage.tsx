import Image from "@/node_modules/next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const CardWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-right md:py-20 ">
      <h2 className="text-2xl md:text-5xl text-primary font-bold py-6">
        POVOLJNA CENA I BRZA USLUGA ŠLEPANJA VOZILA U ZEMLJI I INOSTRANSTVU
      </h2>
      <div className="flex flex-col md:flex-row md:gap-20  items-stretch ">
        <div>
          <Image
            src={"/puric slep.jpg"}
            width={700}
            height={700}
            alt="slep cacak"
            className="rounded-xl md:rounded-l-full"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-0 py-8 md:py-20 md:justify-between text-left text-xl md:text-3xl">
          <p className="flex gap-5 items-center">
            {" "}
            <span className="text-primary text-4xl md:text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>{" "}
            Treba vam pomoć na putu?
          </p>
          <p className="flex gap-5 items-center">
            {" "}
            <span className="text-primary text-4xl md:text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            U svakom trenutku spremni 24h dnevno
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-4xl md:text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Povoljne cene
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-4xl md:text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Profesionalna usluga
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-4xl md:text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Dugogodisnje iskustvo
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-4xl md:text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Poštujemo vaše vreme
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
