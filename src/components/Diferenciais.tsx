import React from "react";
import { Users, Zap, Heart, Award, ArrowRight } from "lucide-react";

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: Users,
      title: "Profissionais Especializados",
      description:
        "Equipe altamente qualificada e em constante atualização nas mais avançadas técnicas de harmonização orofacial.",
      highlight: "",
    },
    {
      icon: Zap,
      title: "Tecnologia de Ponta",
      description:
        "Utilizamos equipamentos de última geração e produtos de alta qualidade, garantindo segurança e resultados superiores.",
      highlight: "",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description:
        "Cuidado personalizado e atenção a cada detalhe, desde a primeira consulta até o pós-procedimento.",
      highlight: "",
    },
    {
      icon: Award,
      title: "Resultados Naturais e Duradouros",
      description:
        "Nosso foco é realçar sua beleza de forma sutil e elegante, com harmonia e longevidade.",
      highlight: "",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por Que Nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
              Escolher?
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            A excelência que faz a diferença em cada procedimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {diferenciais.map((diferencial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-50 to-gold-50 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform">
                <diferencial.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {diferencial.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {diferencial.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-rose-600 font-medium">
                
                <span>{diferencial.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-3xl p-8 text-white mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">+ 21.348</div>
              <div className="text-rose-100">VIDAS TRANSFORMADAS</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">+ 83.453</div>
              <div className="text-rose-100">TRATAMENTOS REALIZADOS</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">+13</div>
              <div className="text-rose-100">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">+ 7</div>
              <div className="text-rose-100">Prêmios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
