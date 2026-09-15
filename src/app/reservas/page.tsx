import Navbar from "@/components/legacy/Navbar";
import BackgroundGoldenLines from "@/components/new/BackgroundGoldenLines";
import Hero from "@/components/legacy/Hero";
import CabinGrid from "@/components/legacy/CabinGrid";
import ConciergeCTA from "@/components/legacy/ConciergeCTA";
import LocationMap from "@/components/new/Location";
import Footer from "@/components/new/Footer";

export const metadata = {
  title: "Reservas | La Emiliana",
  description: "Reserva y conoce La Emiliana, Garruchos, Corrientes.",
};

export default function Home() {
  return (
    <>
      <main className="w-full pt-20 bg-moss min-h-screen relative">
        <BackgroundGoldenLines />
        <div className="flex flex-col w-full relative z-10">
          <Hero/>
          <LocationMap/>
          <CabinGrid/>
          <ConciergeCTA/>
        </div>  
      </main>
    </>
  );
};