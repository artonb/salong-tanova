import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/tanova-logo-white.png";
import video from "../../assets/video32.mp4";
import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const goToPrices = () => {
    navigate("/", { state: { scrollTo: "priser" } });
  };
  return (
    <div className="relative w-full h-[600px]">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-row items-center justify-between h-20 w-full max-w-[1200px] mx-auto">
          <a href="/">
            <img src={logo} className="w-68 pt-5 pl-10 cursor-pointer" />
          </a>
          <div className="hidden lg:flex flex-row gap-15 pr-10 text-white">
            <button
              onClick={goToPrices}
              className="cursor-pointer hover:text-gray-400 transition"
            >
              Priser
            </button>
            <Link to="/about">
              <h1 className="cursor-pointer hover:text-gray-400 transition">
                Om oss
              </h1>
            </Link>
            <Link to="/contact">
              <h1 className="cursor-pointer hover:text-gray-400 transition">
                Kontakt
              </h1>
            </Link>
            <a
              href="https://www.bokadirekt.se/places/salong-tanova-56873"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-400 transition"
            >
              Boka tid
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 text-white"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Öppna meny"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-2">
            <h1 className="text-4xl md:text-7xl font-inter font-light italic select-none pointer-events-none">
              We make your
            </h1>

            <h1 className="mt-5 text-5xl md:text-8xl font-dancing font-bold select-none pointer-events-none">
              hair dreams
            </h1>

            <h1 className="mt-5 text-4xl md:text-7xl font-inter font-light italic select-none pointer-events-none">
              come true ♡
            </h1>

            <a
              href="https://www.bokadirekt.se/places/salong-tanova-56873"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-20 inline-block px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Boka nu!
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-4 right-4 left-4 rounded-2xl bg-black/85 text-white p-5 space-y-3 shadow-xl">
            <button
              onClick={() => {
                setOpen(false);
                goToPrices();
              }}
              className="block w-full text-left py-2 text-base hover:text-gray-300"
            >
              Priser
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/about");
              }}
              className="block w-full text-left py-2 text-base hover:text-gray-300"
            >
              Om oss
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/contact");
              }}
              className="block w-full text-left py-2 text-base hover:text-gray-300"
            >
              Kontakt
            </button>
            <a
              href="https://www.bokadirekt.se/places/salong-tanova-56873"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 block w-full text-center py-2.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Boka en tid
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
