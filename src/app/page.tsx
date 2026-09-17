import BackgroundGoldenLines from "@/components/new/ui/BackgroundGoldenLines";
import {Hero} from "@/components/new/home/Hero"
import LocationMap from "@/components/new/ui/Location";
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