import Image from "next/image";
import Navbar from "@/components/legacy/Navbar";
import BackgroundGoldenLines from "@/components/new/ui/BackgroundGoldenLines";
import {Hero} from "@/components/new/home/Hero"
import StoryZigzag from "@/components/legacy/StoryZigzag";
import CabinGrid from "@/components/legacy/CabinGrid";
import SustainabilityMetrics from "@/components/legacy/SustainabilityMetrics";
import ConciergeCTA from "@/components/legacy/ConciergeCTA";
import LocationMap from "@/components/new/ui/Location";
import Footer from "@/components/new/ui/Footer";
import { ComplexSection } from "@/components/new/home/Complex";
import { AmenitiesBanner } from "@/components/new/home/AmenitiesBanner";
import { ExperienceSection } from "@/components/new/home/ExperienceSection";
import { ContactFormSection } from "@/components/new/ui/ContactForm";

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
          <ContactFormSection/>
          <LocationMap/>
        </div>  
      </main>
    </>
  );
};