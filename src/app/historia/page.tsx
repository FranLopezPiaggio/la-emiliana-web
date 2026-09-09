import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackgroundGoldenLines from "@/components/BackgroundGoldenLines";
import Hero from "@/components/Hero";
import StoryZigzag from "@/components/StoryZigzag";
import CabinGrid from "@/components/CabinGrid";
import SustainabilityMetrics from "@/components/SustainabilityMetrics";
import ConciergeCTA from "@/components/ConciergeCTA";
import LocationMap from "@/components/Location";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Historia | La Emiliana",
  description: "Historia de La Emiliana, Garruchos, Corrientes.",
};

export default function Home() {
  return (
    <>
      <main className="w-full pt-20 bg-moss min-h-screen relative">
        <BackgroundGoldenLines />
        <div className="flex flex-col w-full relative z-10">
          <Hero/>
          <StoryZigzag/>
        </div>  
      </main>
    </>
  );
};