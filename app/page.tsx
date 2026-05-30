import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import EstateChronicles from "@/components/home/EstateChronicles";
import FeaturedCoffees from "@/components/home/FeaturedCoffees";
import AlchemyOfRoasting from "@/components/home/AlchemyOfRoasting";
import BrandStory from "@/components/home/BrandStory";
import ProcessStrip from "@/components/home/ProcessStrip";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <EstateChronicles />
      <FeaturedCoffees />
      <AlchemyOfRoasting />
      <BrandStory />
      <ProcessStrip />
      <Newsletter />
    </>
  );
}
