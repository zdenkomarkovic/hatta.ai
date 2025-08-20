"use client";

import React, { useState } from "react";

const About = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="container px-2 md:px-4 mx-auto py-7 md:py-12 space-y-5">
      {" "}
      <h2 className=" text-6xl text-primary text-center py-10 font-gagalin">
        Lucky fitnes sa vama od 2012
      </h2>
      <p className=" first-letter:pl-6 text-lg md:text-3xl">
        Laki fitnes osnovan je 2012-te godine. Svojom raznovrsnom ponudom,
        visegodisnjim iskustvom i strucnjoscu, okupio je stotinjak redovnih
        clanova. Fitnes klub se nalazi na novoj atraktivnoj lokaciji, mirnoj i
        punoj zelenila, a opet u srcu Beograda, na Crvenom krstu. Ulica Nikole
        Stefanovica 9.
      </p>{" "}
      <div className={`space-y-5 ${showText ? "block" : "hidden"}`}>
        <p className=" first-letter:pl-6 text-lg md:text-3xl">
          {" "}
          Termini se odrzavaju tokom celog dana i osmisljeni su tako da
          odgovaraju svakoj starosnoj dobi.Kvalitet treninga ogleda se u
          prilagodjavanju intenziteta treninga svakoj grupi kao i pojedincu.
          Polaznici uvek dobijaju treninge razlicite dinamike i sadrzine.
          Zahvaljujuci novoj lokaciji, blizu trolejbuskih i autobuskih stanica,
          ulica sa parkingom, klub je lako dostupan polaznicima iz razlicitih
          delova grada. Ono po cemu se ovaj klub razlikuje od drugih je
          maksimalni komfor i privatnost članova, kao i visok kvalitet treninga,
          kao i manje grupe za rad. U ponudi su pazljivo osmisljeni grupni
          treninzi: aerobik, pilates, mix fit, body power, rekreacija za
          starije, individualni treninzi....
        </p>
        <p className=" first-letter:pl-6 text-lg md:text-3xl">
          Savremeni način života doveo je do sve većeg izazova po pitanju
          održavanja fizičkog zdravlja. Sedeći način života, sve češći rad od
          kuće, olakšani životni uslovi, sve je to skupa dovelo do pada
          spremnosti našeg organizma. Sem estetskog, nedostatak treninga dovodi
          i do niza zdravstvenih problema. Bolovi u ledjima, lako zamaranje,
          loše raspoloženje....su samo neke od posledica smanjenog fizičkog
          vežbanja. Naš cilj je da doprinesemo povećanoj svesti kada je fizička
          aktivnost u pitanju. Sem <span className="font-bold">jakog</span>{" "}
          tela, treninzi doprinose i poboljšanju raspoloženja, jačanju volje i
          taj efekat se može preneti i na druge životne sfere. Lucky fitness je
          udruženje koje iza sebe ima{" "}
          <span className="font-bold">dugogodišnji rad i iskustvo</span>u
          vodjenju{" "}
          <span className="font-bold">
            grupnih i individualnih treninga, kako kondicionih, tako i
            terapeutskih
          </span>
          .
        </p>
      </div>
      <p
        onClick={() => setShowText(true)}
        className={`text-lg md:text-3xl text-right text-primary cursor-pointer pr-10 ${
          showText ? "hidden" : "block"
        }`}
      >
        Saznaj vise...
      </p>
      <p
        onClick={() => setShowText(false)}
        className={`text-lg md:text-3xl text-right text-primary cursor-pointer pr-10 ${
          showText ? "block" : "hidden"
        }`}
      >
        Zatvori
      </p>
    </div>
  );
};

export default About;
