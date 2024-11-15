import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Mail, Phone, Linkedin, Calendar } from 'lucide-react';

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
  // Estado para controlar qual cartão está expandido
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Array de objetos LeaderCard com informações dos líderes
  const leaderCards: LeaderCard[] = [
    {
      name: t('valenteVencislauName'),
      role: t('valenteVencislauRole'),
      image: '/img/Pr-vencislau.jpg',
      shortDescription: t('valenteVencislauShortDesc'),
      fullDescription: t('valenteVencislauFullDesc'),
      contact: {
        linkedin: "linkedin.com/in/ovencislaumario/",
      },
      achievements: [
        t('valenteVencislauAchievement1'),
      ]
    },
    {
      name: t('geovaneMoisesName'),
      role: t('geovaneMoisesRole'),
      image: "/img/geovane-direction.jpg",
      shortDescription: t('geovaneMoisesShortDesc'),
      fullDescription: t('geovaneMoisesFullDesc'),
      contact: {
        linkedin: "linkedin.com/in/geovane-moisés-a05665199/"
      },
      achievements: [
        t('geovaneMoisesAchievement1'),
      ]
    },
    {
      name: t('telmoDaSilvaName'),
      role: t('telmoDaSilvaRole'),
      image: "/img/telmo.jpg",
      shortDescription: t('telmoDaSilvaShortDesc'),
      fullDescription: t('telmoDaSilvaFullDesc'),
      contact: {
        linkedin: "linkedin.com/in/"
      },
      achievements: [
        t('telmoDaSilvaAchievement1'),
      ]
    },
    {
      name: t('rubenBungaName'),
      role: t('rubenBungaRole'),
      image: "/img/ruben.jpg",
      shortDescription: t('rubenBungaShortDesc'),
      fullDescription: t('rubenBungaFullDesc'),
      contact: {
        linkedin: "linkedin.com/in/bunga-ruben-5394012a3"
      },
      achievements: [
        t('rubenBungaAchievement1'),
      ]
    }
  ];

  // Função para alternar a expansão de um cartão
  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div id="direction" className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{t('direction')}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t('directionDescription')}
            </p>
          </div>
        </div>
      </div>

      {/* Cartões de Liderança */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                {/* Informações de contato */}
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
        </div>
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
