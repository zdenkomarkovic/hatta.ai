import About from "@/components/About";
import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import Cards2Kosina from "@/components/Cards2Kosina";
import CardsKosina from "@/components/CardsKosina";
import CardWithImage from "@/components/CardWithImage";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Statistika from "@/components/Statistika";
import Testemonials from "@/components/Testimonials";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <CardsKosina />
      <About2 />
      <Statistika />
      <PozoviteNasOdmah />
      <CardWithImage />
      <PozoviteNasOdmahImage />
      <Statistika />
      <Cards1 title={"dodaj naslov"} data={cards1Data} />
      <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cards2Kosina
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cardlist />
      <BackgroundImage />
      <Testemonials />
    </div>
  );
}
