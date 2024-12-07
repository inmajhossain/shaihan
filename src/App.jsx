// Main component
// npm install
//Tailwind Install NPM - npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p
// // Tailwind config JS -
// content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }
// Index.css -
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// Daisy Ui Install NPM - npm i -D daisyui@latest

// // Add In Tailwind CSS - module.exports = {
//   //...
//   plugins: [
//     require('daisyui'),
//   ],
// }
// Daisy Ui Theme in Tailwind config js -
// module.exports = {
//   //...
//   daisyui: {
//     themes: ["light", "dark", "cupcake"],
//   },
// }
// indexedDB.html - Like this
// <html data-theme="cupcake"></html>
//React Icon NPM - npm install react-icons --save
// React Hook Form NPM - npm install react-hook-form
// React Router NPM - npm install react-router@6 react-router-dom@6

// Git Add -
// git add .
// git commit -m "Descriptin"
// git push

// Addtional if Need
// Frammer Motion NPM - npm install motion

import { Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/About";
import Footer from "./componant/Footer";
import Header from "./componant/Header";
import PhotoGallery from "./componant/PhotoGallery";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Navigate } from "react-router";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-[50px]">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
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
