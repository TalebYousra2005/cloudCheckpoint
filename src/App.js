import React from "react";

import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import Map from "./components/map/Map";
import DisclaimerSection from "./components/disclaimer/Disclaimer";
import FooterSection from "./components/footer/Footer";

import "./App.css";

function App() {
  const location = {
    address: "Rue Rezig Kadda, Boulevard de l'Université, Bab Ezzouar 16000",
    lat: 36.71495617997185,
    lng: -3.1890036834829116,
  };
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <Map location={location} zoomLevel={17} />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;
