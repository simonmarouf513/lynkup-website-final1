import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features"; // Now "What is LYNKUP"
import SocialComfort from "./components/SocialComfort";
import Safety from "./components/Safety";
import Founders from "./components/Founders"; // Now "Our Story"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-50 selection:bg-brand-yellow selection:text-black">
      <Header />
      <main id="top">
        <Hero />
        <Features />
        <SocialComfort />
        <Founders />
        <Safety />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;