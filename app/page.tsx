import Navigation from "@/components/Navigation";
import Overview from "@/components/sections/Overview";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Overview />
      <About />
      <Services />
      <Contact />
    </main>
  );
}