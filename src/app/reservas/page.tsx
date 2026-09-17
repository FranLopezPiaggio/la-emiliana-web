import BackgroundGoldenLines from "@/components/new/ui/BackgroundGoldenLines";
import {CabinsGrid} from "@/components/new/booking/CabinGrid";
import { BookingHeroSection } from "@/components/new/booking/HeroBooking";
import { AmenitiesBanner } from "@/components/new/booking/Amenities";

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
        <BookingHeroSection/>
        <CabinsGrid/>
        <AmenitiesBanner/>
        </div>  
      </main>
    </>
  );
};