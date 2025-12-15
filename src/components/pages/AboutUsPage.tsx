import companyImage from "../../assets/shop2.jpg";
import aboutImage from "../../assets/about2.png";
import { useLayoutEffect } from "react";

export default function AboutUsPage() {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="bg-white">
      <section className="py-12 sm:py-12">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="text-center sm:text-left max-w-xl mx-auto">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Om företaget
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Salong Tanova
              </h1>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-600">
                Salong Tanova grundades 2024 av mig, Tanja Jovanova. Med över
                tio års erfarenhet inom frisöryrket brinner jag för att skapa
                personliga och minnesvärda upplevelser för varje kund. Min
                vision är en modern salong där kvalitet, kreativitet och omtanke
                står i centrum. Här möts du av en varm, professionell atmosfär
                och tjänster anpassade efter just din stil och dina behov.
                Välkommen till en plats där du alltid står i fokus.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                Salongen ligger centralt och är lätt att ta sig till, med
                generösa öppettider för att passa din vardag.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-md">
                <img
                  src={companyImage}
                  alt="Bild på Salong Tanova"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-100" />

      <section className="py-12 sm:py-12 bg-gray-50">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={aboutImage}
                  alt="Frisör på Salong Tanova"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Om frisören
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Tanja Jovanova
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-600">
                Med över tio års erfarenhet brinner Tanja för att skapa
                personliga och vackra resultat som lyfter varje kunds naturliga
                skönhet. Hennes passion för hantverket, kreativiteten och mötet
                med människor är grunden till Salong Tanova, en plats där varje
                besök ska kännas tryggt, varmt och alldeles speciellt.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                Oavsett om du vill göra en stor förändring eller bara fräscha
                upp din nuvarande frisyr tar jag mig alltid tid till
                konsultation innan vi börjar, så du vet exakt vad vi gör och
                varför.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                Varmt välkommen att boka en tid, jag ser fram emot att ta hand
                om dig och ditt hår.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
