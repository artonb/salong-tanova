import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Footer from "./components/header/Footer";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ContactUsPage from "./components/pages/ContactUsPage";

function App() {
  return (
    <Router basename="/salong-tanova">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
