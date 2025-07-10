import React from "react";
import { CheckCircle, User, PenTool, Heart, Shield, Play } from "lucide-react";

const ComoFunciona = () => {
  const steps = [
    {
      icon: User,
      title: "Avaliação Personalizada",
      description:
        "Começamos com uma consulta detalhada para entender suas expectativas e analisar suas características faciais únicas.",
      highlight: "Consulta individual de 45 minutos",
    },
    {
      icon: PenTool,
      title: "Planejamento Individualizado",
      description:
        "Nossa equipe cria um plano de tratamento sob medida, utilizando as técnicas mais avançadas para resultados naturais.",
      highlight: "Plano personalizado e exclusivo",
    },
    {
      icon: Heart,
      title: "Procedimento Confortável",
      description:
        "Realizamos os procedimentos com o máximo de conforto e segurança, em um ambiente acolhedor e com equipamentos de ponta.",
      highlight: "Ambiente relaxante e seguro",
    },
    {
      icon: Shield,
      title: "Acompanhamento Pós-Procedimento",
      description:
        "Oferecemos suporte contínuo e acompanhamento para garantir sua satisfação e otimizar os resultados.",
      highlight: "Suporte completo por 30 dias",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container  mx-auto px-4">
        <div>
          <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 mb-6">
            Sua Jornada para a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
              Harmonia Facial
            </span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Nosso passo a passo exclusivo para garantir os melhores resultados
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Steps */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-rose-50 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-rose-600 bg-rose-100 px-2 py-1 rounded-full">
                        Passo {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-rose-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">{step.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-rose-50 to-gold-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Entenda a Harmonização Orofacial em Minutos!
              </h3>

              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl flex items-center justify-center group cursor-pointer hover:from-rose-300 hover:to-rose-400 transition-all">
                <div className="text-center w-full">
                  <iframe
                    className="rounded-lg w-full h-[315px]"
                    src="https://www.youtube.com/embed/7oaCJcbB6L8?si=Cl1hzvyJP1EonQYl"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    O que é a Harmonização Orofacial
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Benefícios e segurança do procedimento
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    O que esperar dos resultados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
