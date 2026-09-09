import Navbar from "@/components/Navbar";
import LocationMap from "@/components/Location";
import Footer from "@/components/Footer";
import BackgroundGoldenLines from "@/components/BackgroundGoldenLines";
import ImageGallery from "@/components/ImageGallery";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";

export const metadata = {
  title: "Galería | La Emiliana",
  description: "Recorrido visual por La Emiliana, Garruchos, Corrientes.",
};

export default function Home() {
  return (
    <>
      <main className="w-full pt-20 bg-moss min-h-screen relative">
        <BackgroundGoldenLines />
        <div className="flex flex-col w-full relative z-10">
          <HorizontalScrollGallery />
          {/* <LocationMap/> */}
        </div>  
      </main>
    </>
  );
};

