import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "A harmonização orofacial é dolorosa?",
      answer: "Os procedimentos são minimamente invasivos e realizados com anestesia local para garantir o máximo conforto. A maioria dos pacientes relata apenas um leve desconforto durante a aplicação, semelhante a uma pequena picada."
    },
    {
      question: "Quanto tempo duram os resultados?",
      answer: "A duração varia conforme o procedimento e o organismo de cada pessoa. Em média, os resultados com preenchedores duram de 6 a 18 meses, enquanto o botox pode durar de 4 a 6 meses. Mantemos acompanhamento regular para retoques quando necessário."
    },
    {
      question: "Quais são os riscos da harmonização orofacial?",
      answer: "Com profissionais qualificados e produtos aprovados pela ANVISA, os riscos são mínimos. Podem ocorrer pequenos hematomas, inchaço temporário ou sensibilidade, que desaparecem em poucos dias. Durante a consulta, explicamos todos os detalhes e cuidados."
    },
    {
      question: "Qual a idade mínima para fazer harmonização orofacial?",
      answer: "A idade ideal varia e é avaliada individualmente considerando o desenvolvimento facial completo e as necessidades específicas. Geralmente, os procedimentos são indicados para adultos a partir dos 18 anos, sempre com avaliação médica criteriosa."
    },
    {
      question: "Posso voltar às atividades normais no mesmo dia?",
      answer: "Sim, na maioria dos casos é possível retomar as atividades normais no mesmo dia. Fornecemos orientações específicas de cuidados pós-procedimento, como evitar exercícios intensos nas primeiras 24 horas e seguir as recomendações de aplicação de gelo."
    },
    {
      question: "Como escolher o profissional ideal?",
      answer: "É fundamental escolher um profissional especializado em harmonização orofacial, com formação específica e experiência comprovada. Verifique certificações, antes e depois de outros pacientes, e se sinta confortável durante a consulta. Nossa equipe possui todas as qualificações necessárias."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-rose-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Tire suas dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Respostas claras para suas perguntas mais importantes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-rose-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-rose-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-rose-500" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-rose-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer todas as suas questões em uma consulta personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Fale Conosco no WhatsApp</span>
              </a>
              <a
                href="tel:+558130940025"
                className="border-2 border-rose-500 text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Ligue Agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;