import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Resultados = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const resultados = [
    {
      antes: "Antes do procedimento",
      depois: "Após harmonização",
      titulo: "Suavização de Rugas",
      descricao: "Redução natural das linhas de expressão"
    },
    {
      antes: "Antes do procedimento",
      depois: "Após harmonização",
      titulo: "Contorno Facial Definido",
      descricao: "Realce da estrutura facial natural"
    },
    {
      antes: "Antes do procedimento",
      depois: "Após harmonização",
      titulo: "Lábios Mais Volumosos",
      descricao: "Aumento sutil e natural do volume labial"
    },
    {
      antes: "Antes do procedimento",
      depois: "Após harmonização",
      titulo: "Rejuvenescimento Facial",
      descricao: "Aparência mais jovem e radiante"
    },
    {
      antes: "Antes do procedimento",
      depois: "Após harmonização",
      titulo: "Harmonização Completa",
      descricao: "Equilíbrio perfeito entre todos os elementos faciais"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % resultados.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + resultados.length) % resultados.length);
  };

  return (
    <section id="resultados" className="py-20 bg-gradient-to-br from-rose-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veja a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
              Transformação
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Resultados Reais que Inspiram Confiança
          </p>
          <p className="text-lg text-rose-600 italic">
            "Cada sorriso, cada olhar, reflete a arte da harmonização que realça sua verdadeira essência."
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
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                      <p className="text-gray-600">{resultados[currentSlide].antes}</p>
                    </div>
                  </div>
                </div>

                {/* Depois */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      DEPOIS
                    </span>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Star className="w-8 h-8 text-white fill-current" />
                      </div>
                      <p className="text-rose-700 font-medium">{resultados[currentSlide].depois}</p>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      ✨ Resultado
                    </div>
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {resultados[currentSlide].titulo}
                </h3>
                <p className="text-gray-600 text-lg">
                  {resultados[currentSlide].descricao}
                </p>
              </div>
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
                  index === currentSlide ? 'bg-rose-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">Mais de 1000 pacientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;