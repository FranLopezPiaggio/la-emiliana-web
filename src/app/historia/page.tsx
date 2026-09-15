import Image from "next/image";
import Navbar from "@/components/legacy/Navbar";
import BackgroundGoldenLines from "@/components/new/BackgroundGoldenLines";
import Hero from "@/components/legacy/Hero";
import StoryZigzag from "@/components/legacy/StoryZigzag";
import CabinGrid from "@/components/legacy/CabinGrid";
import SustainabilityMetrics from "@/components/legacy/SustainabilityMetrics";
import ConciergeCTA from "@/components/legacy/ConciergeCTA";
import LocationMap from "@/components/new/Location";
import Footer from "@/components/new/Footer";

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