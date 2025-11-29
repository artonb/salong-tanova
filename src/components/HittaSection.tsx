import logo from "../assets/tanova-round.png";

export default function FindUsSection() {
  return (
    <section className="bg-white sm:mb-12">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
            Hitta hit
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Besök vår salong
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Du hittar oss på Regementsgatan 58, bara några minuter från
            Slottsstaden och Ribersborg. Varmt välkommen in!
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col items-center justify-center space-y-4 md:h-full lg:h-full">
            <img src={logo} />
            <p className="text-gray-700 text-base leading-relaxed text-center">
              Regementsgatan 58 <br />
              217 51 Malmö
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Regementsgatan+58%2C+217+51+Malmö"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition"
            >
              Öppna i Google Maps
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg mb-8 sm:mb-0">
            <iframe
              title="Google Map"
              width="100%"
              height="350"
              loading="lazy"
              style={{ border: 0 }}
              className="rounded-3xl w-full h-[350px] sm:h-[400px] object-cover"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.547679035845!2d12.99509827680515!3d55.592306973039496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46530594a4df0209%3A0x6c51989c0a402e4f!2sRegementsgatan%2058%2C%20217%2051%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1707999999999"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
