import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ComoFunciona from './components/ComoFunciona';
import Resultados from './components/Resultados';
import Diferenciais from './components/Diferenciais';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Depoimentos from "./components/Depoimentos";
function App() {
  return (
    <div className="font-inter">
      <Header />
      <main>
        <HeroSection />
        <ComoFunciona />
        <Resultados />
        <Diferenciais />
        <Depoimentos/>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;