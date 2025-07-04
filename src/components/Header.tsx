import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Star } from "lucide-react";
import logo from "../assets/imgs/logoprin.svg";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Banner de Oferta */}
      <div className="bg-gradient-to-r from-rose-600 to-rose-500 text-white py-3 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
            <Star className="w-4 h-4 text-gold-400 fill-current" />
            <span>AVALIAÇÃO GRATUITA SÓ HOJE! Garanta sua transformação.</span>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="" />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("diferenciais")}
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Contato Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+5581930940025"
                className="flex items-center gap-2 text-gray-700 hover:text-rose-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(81)93094-0025</span>
              </a>
              <a
                href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>

            {/* Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("como-funciona")}
                  className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium"
                >
                  Como Funciona
                </button>
                <button
                  onClick={() => scrollToSection("resultados")}
                  className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium"
                >
                  Resultados
                </button>
                <button
                  onClick={() => scrollToSection("diferenciais")}
                  className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium"
                >
                  Diferenciais
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium"
                >
                  Contato
                </button>
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <a
                    href="tel:+5511999999999"
                    className="flex items-center gap-2 text-gray-700 hover:text-rose-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(11) 99999-9999</span>
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors w-fit"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
