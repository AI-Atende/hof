import React, { useState } from "react";
//icons
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
//antes e dps
import caso01antes from "../assets/imgs/hof01antes.webp";
import caso01dps from "../assets/imgs/hof01dps.webp";
import caso02antes from "../assets/imgs/caso02antes.webp";
import caso02dps from "../assets/imgs/caso02sps.webp";
import caso03antes from "../assets/imgs/caso03antes.webp";
import caso03dps from "../assets/imgs/caso03dps.webp";
import caso04antes from "../assets/imgs/caso04anteshof.webp";
import caso04dps from "../assets/imgs/caso04dps.webp";
import caso05antes from "../assets/imgs/caso05antes.webp";
import caso05dps from "../assets/imgs/caso05dps.webp";
import caso06antes from "../assets/imgs/caso06antes.webp";
import caso06dps from "../assets/imgs/caso06dps.webp";
import caso07antes from "../assets/imgs/caso07antes.webp";
import caso07dps from "../assets/imgs/caso07dps.webp";
import caso08antes from "../assets/imgs/caso08antes.webp";
import caso08dps from "../assets/imgs/caso08dps.webp";
import caso09antes from "../assets/imgs/caso09antes.webp";
import caso09dps from "../assets/imgs/caso09dps.webp";
//
const Resultados = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const resultados = [
    {
      antes: caso01antes,
      depois: caso01dps,
    },
    {
      antes: caso02antes,
      depois: caso02dps,
    },
    {
      antes: caso03antes,
      depois: caso03dps,
    },
    {
      antes: caso04antes,
      depois: caso04dps,
    },
    {
      antes: caso05antes,
      depois: caso05dps,
    },
    {
      antes: caso06antes,
      depois: caso06dps,
    },
    {
      antes: caso07antes,
      depois: caso07dps,
    },
    {
      antes: caso08antes,
      depois: caso08dps,
    },
     {
      antes: caso09antes,
      depois: caso09dps,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % resultados.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + resultados.length) % resultados.length
    );
  };

  return (
    <section
      id="resultados"
      className="py-20 bg-gradient-to-br from-rose-50 to-gold-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veja a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
              Transformação
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Resultados Reais que Inspiram Confiança
          </p>
          <p className="text-lg text-rose-600 italic">
            "Cada sorriso, cada olhar, reflete a arte da harmonização que realça
            sua verdadeira essência."
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Antes */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                      ANTES
                    </span>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                    <img
                      src={resultados[currentSlide].antes}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Depois */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      DEPOIS
                    </span>
                  </div>
                  <div className="aspect-[3/4] w-full bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl flex items-center justify-center relative">
                    <img
                      src={resultados[currentSlide].depois}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />

                    <div className="absolute -top-2 -right-2 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      ✨ Resultado
                    </div>
                  </div>
                </div>
              </div>

              {/* Descrição */}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-rose-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-rose-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {resultados.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-rose-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12"></div>
      </div>
    </section>
  );
};

export default Resultados;
