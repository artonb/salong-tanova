import { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";
import img1 from "../../assets/shop2.jpg";
import img2 from "../../assets/shop1.jpg";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="bg-white">
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Kontakt
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Hör av er till oss
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Har du frågor om behandlingar, priser eller bokningar? Tveka inte
              att kontakta oss, vi hjälper dig gärna att hitta rätt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Kontaktuppgifter
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Du kan nå oss via telefon, e-post eller sociala medier. Vi
                    försöker alltid svara så snabbt vi kan.
                  </p>

                  <div className="mt-6 space-y-4 text-sm text-gray-700">
                    <div className="flex gap-3">
                      <div className="mt-1 h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">
                        <FaPhoneAlt />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          Telefon
                        </p>
                        <a
                          href="tel:+4640420045"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          +46 (0)40-42 00 45
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">
                        <FaEnvelope />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          E-post
                        </p>
                        <a
                          href="mailto:info@salongtanova.se"
                          className="font-medium text-gray-900 break-all hover:underline"
                        >
                          info@salongtanova.se
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 h-8 w-8 rounded-full bg-linear-to-tr from-purple-500 via-pink-500 to-yellow-400 text-white flex items-center justify-center text-xs">
                        <FaInstagram />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          Instagram
                        </p>
                        <a
                          href="https://www.instagram.com/salongtanova"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          @salongtanova
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 h-8 w-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs">
                        <FaFacebookF />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          Facebook
                        </p>
                        <a
                          href="https://www.facebook.com/Salong-Tanova-61553993353970/"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Salong Tanova
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-xs">
                        <FaTiktok />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          TikTok
                        </p>
                        <a
                          href="https://www.tiktok.com/@salongtanova"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          @salongtanova
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-500">
                  Föredrar du att skriva istället för att ringa? Du kan alltid
                  kontakta oss via sociala medier eller e-post så återkommer vi
                  så snart vi kan.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="w-full overflow-hidden rounded-2xl shadow-md h-56 sm:h-64 lg:h-72">
                <img
                  src={img1}
                  alt="Bild från salongen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full overflow-hidden rounded-2xl shadow-md h-56 sm:h-64 lg:h-72">
                <img
                  src={img2}
                  alt="Ytterligare bild från salongen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
