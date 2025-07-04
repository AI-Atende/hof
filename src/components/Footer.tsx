import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import logofooter from "../assets/imgs/DentalSant-_Horizontal_Negativa-300x89-1.webp";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logofooter} alt="" />
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Especialistas em harmonização orofacial, dedicados a realçar sua
              beleza natural com segurança, tecnologia de ponta e resultados que
              transformam vidas.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm">Procedimentos Seguros</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-sm">Certificado ANVISA</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                <Clock className="w-4 h-4 text-rose-400" />
                <span className="text-sm">5+ Anos de Experiência</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dental_sante/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/dentalsanteodontologia"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                target="_blank"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="tel:+558130940025"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">(81)93094-0025</div>
                  <div className="text-sm text-gray-400">Ligue agora</div>
                </div>
              </a>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm text-gray-400">
                    Atendimento rápido
                  </div>
                </div>
              </a>

              <a
                href="mailto:contato@harmoniabela.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">contato@harmoniabela.com</div>
                  <div className="text-sm text-gray-400">E-mail</div>
                </div>
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">Localização</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <div className="font-medium">
                    Av. Bernardo Vieira de Melo, 2418
                  </div>
                  <div className="text-gray-400">
                    Piedade, Jaboatão dos Guararapes - PE
                  </div>
                  <div className="text-gray-400">CEP: 54410-010</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="font-medium">Horário de Atendimento</div>
                  <div className="text-gray-400">Seg-Sex: 8h às 18h</div>
                  <div className="text-gray-400">Sáb: 8h às 12h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 HarmoniaBela. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
