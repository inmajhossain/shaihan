// Main component

import { Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/About";
import Carasol from "./componant/Carasol";
import Footer from "./componant/Footer";
import Galary from "./componant/Galary";
import Header from "./componant/Header";
import HeroSec from "./componant/HeroSec";
import PhotoGallery from "./componant/PhotoGallery";
import Diff from "./Diff";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-[50px]">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>{" "}
        <Footer />
      </div>
    </>
  );
}
