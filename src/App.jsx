// Main component

import AboutMe from "./componant/About";
import Carasol from "./componant/Carasol";
import Footer from "./componant/Footer";
import Galary from "./componant/Galary";
import Header from "./componant/Header";
import HeroSec from "./componant/HeroSec";
import Diff from "./Diff";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-[50px]">
        <Header />
        <Diff />
        <HeroSec />
        <AboutMe />
        <Carasol />
        <Galary />
        <Footer />
      </div>
    </>
  );
}
