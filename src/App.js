import React from "react";
import CTA from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Results from "./components/Results";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
