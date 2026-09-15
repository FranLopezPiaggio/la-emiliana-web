import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackgroundGoldenLines from "@/components/BackgroundGoldenLines";
import {Hero} from "@/components/new/Hero"
import StoryZigzag from "@/components/StoryZigzag";
import CabinGrid from "@/components/CabinGrid";
import SustainabilityMetrics from "@/components/SustainabilityMetrics";
import ConciergeCTA from "@/components/ConciergeCTA";
import LocationMap from "@/components/Location";
import Footer from "@/components/Footer";
import { ComplexSection } from "@/components/new/Complex";
import { AmenitiesBanner } from "@/components/new/AmenitiesBanner";
import { ExperienceSection } from "@/components/new/ExperienceSection";

export default function Home() {
  return (
    <>
      <main className="w-full bg-sand-light min-h-screen relative">
        <BackgroundGoldenLines />
        <div className="flex flex-col w-full relative z-10">
          <Hero/>
          <ComplexSection/>
          <AmenitiesBanner/>
          <ExperienceSection/>
          <LocationMap/>
        </div>  
      </main>
    </>
  );
};