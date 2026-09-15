import Image from "next/image";
import Navbar from "@/components/legacy/Navbar";
import BackgroundGoldenLines from "@/components/new/BackgroundGoldenLines";
import {Hero} from "@/components/new/Hero"
import StoryZigzag from "@/components/legacy/StoryZigzag";
import CabinGrid from "@/components/legacy/CabinGrid";
import SustainabilityMetrics from "@/components/legacy/SustainabilityMetrics";
import ConciergeCTA from "@/components/legacy/ConciergeCTA";
import LocationMap from "@/components/new/Location";
import Footer from "@/components/new/Footer";
import { ComplexSection } from "@/components/new/Complex";
import { AmenitiesBanner } from "@/components/new/AmenitiesBanner";
import { ExperienceSection } from "@/components/new/ExperienceSection";
import { ContactFormSection } from "@/components/new/ContactForm";

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