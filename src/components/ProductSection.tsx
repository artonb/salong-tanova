import { useEffect, useState } from "react";

import productWide1 from "../assets/reklam1.png";
import productWide2 from "../assets/reklam2.png";
import productWide3 from "../assets/reklam3.png";

import productSquare from "../assets/keune.png";
import productSquare1 from "../assets/keune1.jpg";
import productSquare2 from "../assets/keune2.jpg";
import productSquare3 from "../assets/keune3.jpg";

const wideImages = [productWide1, productWide2, productWide3];
const squareImages = [
  productSquare,
  productSquare1,
  productSquare2,
  productSquare3,
];

export default function ProductShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wideImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-12">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
            Produkter
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Produkterna vi älskar att jobba med
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            I salongen arbetar vi med{" "}
            <span className="font-semibold">Keune</span>, ett professionellt
            hårvårdsmärke med fokus på kvalitet, hållbarhet och hårhälsa.
            Produkterna ger oss frihet att skapa färg, form och glans som
            håller, samtidigt som håret behandlas skonsamt.
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Vi hjälper dig gärna att välja rätt serie från Keune utifrån ditt
            hårs behov, oavsett om du söker mer fukt, volym, reparerande vård
            eller extra glans.
          </p>
        </div>

        <div className="mb-10">
          <div className="relative w-full h-30 sm:h-50 md:h-60 lg:h-70 overflow-hidden rounded-3xl shadow-md">
            <div className="relative w-full h-full">
              {wideImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Produktbild ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {squareImages.map((src, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-gray-100 shadow-sm"
              >
                <img
                  src={src}
                  alt={`Produkt detalj ${index + 1}`}
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm text-gray-500 text-center">
            Vill du veta vilka Keune-produkter vi använder i just din behandling
            eller få hjälp att bygga en rutin för hemma? Fråga oss i samband med
            ditt besök, vi guidar dig gärna.
          </p>
        </div>
      </div>
    </section>
  );
}
