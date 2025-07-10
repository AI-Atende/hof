import React from "react";
import mercia from "../assets/imgs/perfilMercia.webp";
import henrique from "../assets/imgs/perfilhenrique.webp";
import shirley from "../assets/imgs/perfilshirley.webp";
import carla from "../assets/imgs/CarlaCampos.webp";
import tatiana from "../assets/imgs/tatiana.webp";
import { Quote, Star } from "lucide-react";

const ResultsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Carla Campos",
      image: carla,
      text: "A clínica é sem dúvida a melhor de Recife! Desde o atendimento até os tratamentos, altamente eficazes! Profissionais experientes, competentes e comprometidos. Promete muito e entrega tudo!! Estou muito satisfeita com meu resultado.",
      treatment: "",
    },
    {
      name: "Tatiana Mota",
      image: tatiana,
      text: "Adorei conhecer a clínica, linda! Amei a tarde, um momento para recarregar as energias e se renovar. Uma delícia!",
      treatment: "",
    },
    {
      name: "Ana Costa",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "Não sentia dor há anos! Além do sorriso lindo, minha qualidade de vida melhorou drasticamente.",
      treatment: "",
    },
    {
      name: "Mercia Rathunde",
      image: mercia,
      text: "Sempre com o melhor atendimento, cuidado, carinho com os pacientes. Cada vez que minha família vai a uma consulta sai mais feliz do que chegou! Gratidão à toda a equipe que faz o Dental Santé!!!",
      treatment: "",
    },
    {
      name: "Herike Carlos",
      image: henrique,
      text: "Clínica excelente, ótimos profissionais e funcionários atenciosos. Agendem logo sua avaliação! Lugar aconchegante e área kids.",
      treatment: "",
    },
    {
      name: "Shirleide Lima",
      image: shirley,
      text: "Quero registrar meu elogio à Clínica Dental Santé pelo atendimento impecável. Fui recebida com acolhimento, cuidado e profissionalismo em cada detalhe. É nítido o compromisso da equipe com a excelência — da recepção ao consultório, tudo transmite confiança e respeito com o paciente.",
      treatment: "",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
        O Que Nossos Pacientes Dizem
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg relative"
          >
            <Quote className="w-5 h-5 text-sky-500 mb-4" aria-hidden="true" />
            <p className="text-gray-600 mb-6 italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.treatment}</p>
              </div>
            </div>
            <div className="flex gap-1 mt-3">
              <span className="sr-only">5 de 5 estrelas</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-rose-500 to-rose-600  text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Marcar Avaliação Gratuita!
          </button>
        </a>
      </div>
    </section>
  );
};

export default ResultsSection;