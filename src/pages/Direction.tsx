import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';  // Importando o Slider
import { ChevronDown, ChevronUp, Linkedin, Calendar } from 'lucide-react';

// Interface para definir a estrutura de um cartão de líder
interface LeaderCard {
  name: string;
  role: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  contact: {
    linkedin: string;
  };
  achievements: string[];
}

const Direction: React.FC = () => {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const leaderCards: LeaderCard[] = [
    // Seus dados de líderes aqui...
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Configurações do Slider
  const sliderSettings = {
    infinite: true,        // Para permitir rotação infinita
    slidesToShow: 3,       // Número de cartões visíveis ao mesmo tempo
    slidesToScroll: 1,     // Quantidade de slides que são rolados por vez
    dot: true,             // Adicionar indicadores de navegação
    arrows: true,          // Ativar setas de navegação
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // Exibir 2 cartões em telas menores
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // Exibir 1 cartão em telas ainda menores
        }
      }
    ]
  };

  return (
    <div id="direction" className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{t('direction')}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{t('directionDescription')}</p>
          </div>
        </div>
      </div>

      {/* Cartões de Liderança - Slider */}
      <div className="container mx-auto px-4 py-16">
        <Slider {...sliderSettings}>
          {leaderCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
              {/* Imagem e informações básicas do líder */}
              <div className="relative">
                <img src={card.image} alt={card.name} className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">{card.name}</h3>
                  <p className="text-white/90">{card.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{card.shortDescription}</p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Linkedin size={18} className="mr-2" />
                    <a href={`https://${card.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn Profile</a>
                  </div>
                </div>

                {/* Botão para expandir/recolher informações adicionais */}
                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {expandedCard === index ? (
                    <>
                      <span className="mr-1">{t('showLess')}</span>
                      <ChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      <span className="mr-1">{t('learnMore')}</span>
                      <ChevronDown size={20} />
                    </>
                  )}
                </button>

                {/* Conteúdo expandido */}
                {expandedCard === index && (
                  <div className="mt-4 animate-fadeIn">
                    <p className="text-gray-700 mb-4">{card.fullDescription}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Calendar size={18} className="mr-2" />
                        {t('keyAchievements')}
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {card.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Chamada para Ação */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('joinOurCommunity')}</h2>
          <p className="text-xl mb-8">{t('communityDescription')}</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            {t('getInvolved')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Direction;
