import React from "react";
import AboutMe from "./About";
import Carasol from "../componant/Carasol";
import HeroSec from "../componant/HeroSec";
import PhotoGallery from "../componant/PhotoGallery";
import Diff from "../Diff";

export default function Home() {
  return (
    <>
      <Diff />
      <HeroSec />
      <AboutMe />
      <Carasol />
      <PhotoGallery />
    </>
  );
}
