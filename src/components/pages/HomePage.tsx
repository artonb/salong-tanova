import PriceList from "../PriceList";
import AboutSection from "../AboutSection";
import ProductSection from "../ProductSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HittaSection from "../HittaSection";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <section id="priser">
        <PriceList />
      </section>
      <section id="about-us">
        <AboutSection />
      </section>
      <section>
        <ProductSection />
      </section>
      <section>
        <HittaSection />
      </section>
    </>
  );
}
