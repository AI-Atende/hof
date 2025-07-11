import React from "react";
import { ArrowRight, Star, Award, Shield } from "lucide-react";
import ft from "../assets/imgs/HOF-harmonização-orofacial-no-queixo.webp";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0  bg-gradient-to-br from-rose-50 via-white to-gold-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-1">
        <div className="w-32 h-32 bg-rose-300 rounded-full blur-3xl "></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <div className="w-40 h-40 bg-gold-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">
                Especialistas em Harmonização
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Desperte a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
                Melhor Versão
              </span>{" "}
              do Seu Rosto
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              A harmonia que você sempre sonhou, ao seu alcance! Descubra como a
              <strong className="text-rose-600"> Harmonização Orofacial</strong>{" "}
              pode realçar sua beleza natural com resultados que encantam e
              duram.
            </p>
            {/* Image/Visual */}
            <div className="relative animate-fade-in md:hidden">
              <div className="relative bg-gradient-to-br from-rose-100 to-gold-100 rounded-3xl p-8 shadow-2xl">
                {/* Placeholder for main image */}
                <img src={ft} alt="" className="object-cover " />

                <div className="text-center ">
                  <p className="text-rose-700 font-medium">
                    Sua transformação começa aqui
                  </p>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                  Resultados Naturais
                </div>
                <div
                  className="absolute -bottom-4 -left-4 bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  Seguro e Eficaz
                </div>
              </div>
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center mt-10 lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">
                  Resultados Naturais
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  100% Seguro
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-rose-500" />
                <span className="text-sm font-medium text-gray-700">
                  Profissionais Especializados
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
              <a
                href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
                target="_blank"
              >
                <button className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Quero Minha Avaliação Gratuita!
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <button
                onClick={() => scrollToSection("resultados")}
                className="border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Ver Resultados
              </button>
            </div>

            {/* Small Text */}
            <p className="text-sm text-gray-500 mt-4 text-center lg:text-left">
              ✨ Avaliação gratuita disponível apenas hoje!
            </p>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-in hidden sm:block">
            <div className="relative bg-gradient-to-br from-rose-100 to-gold-100 rounded-3xl p-8 shadow-2xl">
              {/* Placeholder for main image */}
              <img src={ft} alt="" className="object-cover " />

              <div className="text-center ">
                <p className="text-rose-700 font-medium">
                  Sua transformação começa aqui
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                Resultados Naturais
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                Seguro e Eficaz
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
