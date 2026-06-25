import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Synopsis from "@/components/Synopsis";
import Cast from "@/components/Cast";
import Gallery from "@/components/Gallery";
import Trailer from "@/components/Trailer";
import Locations from "@/components/Locations";
import Press from "@/components/Press";
import Tech from "@/components/Tech";
import Production from "@/components/Production";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Nav />
        <Hero />
        <Synopsis />
        <Cast />
        <Gallery />
        <Trailer />
        <Locations />
        <Press />
        <Tech />
        <Production />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
