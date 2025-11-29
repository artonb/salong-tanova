import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import logo from "../../assets/tanova-logo-white.png";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const goToPrices = () => {
    navigate("/", { state: { scrollTo: "priser" } });
  };

  return (
    <footer className="bg-[#050509] text-gray-300 pt-12 pb-6">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 border-b border-white/5">
          <div>
            <img src={logo} />
            <p className="mt-3 text-sm text-gray-400">
              En personlig hårsalong där fokus ligger på kvalitet, känsla och
              att du ska lämna oss med ett hår du älskar.
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">
              Vi jobbar med
            </p>
            <p className="text-sm font-semibold text-gray-100">Keune</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <div>
                <p className="block text-gray-500 text-xs uppercase">Telefon</p>
                <a
                  href="tel:+4640420045"
                  className="hover:text-white transition break-all"
                >
                  +46 (0)40-42 00 45
                </a>
              </div>
              <li>
                <span className="block text-gray-500 text-xs uppercase">
                  E-post
                </span>
                <a
                  href="mailto:info@salongtanova.se"
                  className="hover:text-white transition break-all"
                >
                  info@salongtanova.se
                </a>
              </li>
              <li>
                <span className="block text-gray-500 text-xs uppercase">
                  Adress
                </span>
                <p>Regementsgatan 58</p>
                <p>217 51 Malmö</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Snabblänkar
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Startsida
                </Link>
              </li>
              <li>
                <button
                  onClick={goToPrices}
                  className="hover:text-white transition cursor-pointer"
                >
                  Priser
                </button>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Om oss
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Kontakt
                </Link>
              </li>
              <li>
                <a
                  href="https://www.bokadirekt.se/places/salong-tanova-56873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Boka tid
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Öppettider
            </h4>
            <ul className="mt-4 space-y-1 text-sm">
              <li>Måndag–Fredag: 10.00–18.00</li>
              <li>Lördag: 10.00–15.00</li>
              <li>Söndag: Stängt</li>
            </ul>

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Följ oss
            </h4>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.instagram.com/salongtanova"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <span className="text-lg">
                  <FaInstagram />
                </span>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/Salong-Tanova-61553993353970/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <span className="text-lg">
                  <FaFacebookF />
                </span>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@salongtanova"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <span className="text-lg">
                  <FaTiktok />
                </span>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Salong Tanova. Alla rättigheter
            förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
