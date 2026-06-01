import Hero from "@/components/home/Hero";
import FeaturedMicrolot from "@/components/home/FeaturedMicrolot";
import SpringOfferings from "@/components/home/SpringOfferings";
import Ticker from "@/components/home/Ticker";
import EstateChronicles from "@/components/home/EstateChronicles";
import FeaturedCoffees from "@/components/home/FeaturedCoffees";
import AlchemyOfRoasting from "@/components/home/AlchemyOfRoasting";
import DualGrid from "@/components/home/DualGrid";
import SubscribeBanner from "@/components/home/SubscribeBanner";
import BrandStory from "@/components/home/BrandStory";
import ProcessStrip from "@/components/home/ProcessStrip";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMicrolot />
      <SpringOfferings />
      <Ticker />
      <AlchemyOfRoasting />
      <DualGrid />
      <EstateChronicles />
      <FeaturedCoffees />
      <SubscribeBanner />
      <BrandStory />
      <ProcessStrip />
      <Newsletter />
    </>
  );
}
