// src/app/layout.tsx
import type { Metadata } from "next";
// import { Cinzel, Playfair_Display, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/new/Navbar";
import Footer from "@/components/new/Footer";

// const cinzel = Cinzel({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-cinzel",
//   display: "swap",
// });

// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-plus-jakarta",
//   display: "swap",
// });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Emiliana - Naturaleza y tranquilidad en Garruchos, Corrientes",
  description: "La Emiliana complejo de cabañas, naturaleza y armonia",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        {/* Google Material Symbols Outlined */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-sand-light text-sand antialiased selection:bg-terracotta selection:text-sand-light">
      <Navbar/>
        {children}
      <Footer/>
      </body>
      
    </html>
  );
}
