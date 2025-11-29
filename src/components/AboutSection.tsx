import aboutImage from "../assets/about2.png";

export default function AboutSection() {
  return (
    <section className="bg-white py-1">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          <div className="shrink-0">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border border-gray-200 shadow-sm mx-auto md:mx-0">
              <img
                src={aboutImage}
                alt="Om Salong Tanova"
                className="w-full h-full object-cover"
              />
              <h2>Tanja</h2>
            </div>
          </div>

          <div className="text-center md:text-left space-y-4 text-gray-700 text-sm sm:text-base">
            <p>
              På <span className="font-semibold">Salong Tanova</span> brinner vi
              för att skapa personliga frisyrer som passar just din stil, vardag
              och personlighet.
            </p>
            <p>
              Vi tar oss tid att lyssna på dina önskemål, ge ärliga
              rekommendationer och använda noggrant utvalda produkter för att
              ditt hår ska må så bra som möjligt, både i salongen och hemma.
            </p>
            <p>
              Oavsett om du vill göra en stor förändring, fräscha upp din färg
              eller bara unna dig en stunds avkoppling, är du varmt välkommen
              till oss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
