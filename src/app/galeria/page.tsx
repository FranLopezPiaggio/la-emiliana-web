import BackgroundGoldenLines from "@/components/BackgroundGoldenLines";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";

export const metadata = {
  title: "Galería | La Emiliana",
  description: "Recorrido visual por La Emiliana, Garruchos, Corrientes.",
};

export default function Home() {
  return (
    <main className="w-full bg-moss min-h-screen relative overflow-x-clip">
      <BackgroundGoldenLines />
      <div className="flex flex-col w-full relative z-10">
        <HorizontalScrollGallery />
      </div>  
    </main>
  );
}