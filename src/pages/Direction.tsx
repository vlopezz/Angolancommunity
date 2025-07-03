import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { ChevronDown, ChevronUp, Linkedin, Calendar } from 'lucide-react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [modalImage, setModalImage] = useState<string | null>(null);

  const leaderCards: LeaderCard[] = [
    {
      name: t('vencislauMario.name'),
      role: t('vencislauMario.role'),
      image: "/img/mario_perfil.jpeg",
      shortDescription: t('vencislauMario.shortDescription'),
      fullDescription: t('vencislauMario.fullDescription'),
      contact: {
        linkedin: t('vencislauMario.contact.linkedin'),
      },
      achievements: [
        t('vencislauMario.achievements.0'),
        t('vencislauMario.achievements.1'),
        t('vencislauMario.achievements.2'),
      ],
    },
    {
      name: t('geovaneMoises.name'),
      role: t('geovaneMoises.role'),
      image: "/img/geovane.jpeg",
      shortDescription: t('geovaneMoises.shortDescription'),
      fullDescription: t('geovaneMoises.fullDescription'),
      contact: {
        linkedin: t('geovaneMoises.contact.linkedin'),
      },
      achievements: [
        t('geovaneMoises.achievements.0'),
        t('geovaneMoises.achievements.1'),
        t('geovaneMoises.achievements.2'),
        t('geovaneMoises.achievements.3'),
        t('geovaneMoises.achievements.4'),
        t('geovaneMoises.achievements.5'),
      ],
    },
    {
      name: t('rubenBunga.name'),
      role: t('rubenBunga.role'),
      image: "/img/ruben.jpg",
      shortDescription: t('rubenBunga.shortDescription'),
      fullDescription: t('rubenBunga.fullDescription'),
      contact: {
        linkedin: t('rubenBunga.contact.linkedin'),
      },
      achievements: [
        t('rubenBunga.achievements.0'),
        t('rubenBunga.achievements.1'),
      ],
    },
    {
      name: t('telmoSilva.name'),
      role: t('telmoSilva.role'),
      image: "/img/telminho.jpeg",
      shortDescription: t('telmoSilva.shortDescription'),
      fullDescription: t('telmoSilva.fullDescription'),
      contact: {
        linkedin: t('telmoSilva.contact.linkedin'),
      },
      achievements: [
        t('telmoSilva.achievements.0'),
        t('telmoSilva.achievements.1'),
      ],
    },
    {
      name: t('jorgeCaetano.name'),
      role: t('jorgeCaetano.role'),
      image: "/img/caetano.jpeg",
      shortDescription: t('jorgeCaetano.shortDescription'),
      fullDescription: t('jorgeCaetano.fullDescription'),
      contact: {
        linkedin: t('jorgeCaetano.contact.linkedin'),
      },
      achievements: [
        t('jorgeCaetano.achievements.0'),
        t('jorgeCaetano.achievements.1'),
      ],
    },
    {
      name: t('desiderioNgulo.name'),
      role: t('desiderioNgulo.role'),
      image: "/img/desione.jpeg",
      shortDescription: t('desiderioNgulo.shortDescription'),
      fullDescription: t('desiderioNgulo.fullDescription'),
      contact: {
        linkedin: t('desiderioNgulo.contact.linkedin'),
      },
      achievements: [
        t('desiderioNgulo.achievements.0'),
        t('desiderioNgulo.achievements.1'),
      ],
    },
    {
      name: t('beatrizCoboNdua.name'),
      role: t('beatrizCoboNdua.role'),
      shortDescription: t('beatrizCoboNdua.shortDescription'),
      image: "/img/bea.jpeg",
      fullDescription: t('beatrizCoboNdua.fullDescription'),
      contact: {
        linkedin: t('beatrizCoboNdua.contact.linkedin'),
      },
      achievements: [],
    },
    {
      name: "Benigna Sambo",
      role: t('benignaSambo.role'),
      shortDescription: t('benignaSambo.shortDescription'),
      image: "/img/beny.jpeg",
      fullDescription: t('benignaSambo.fullDescription'),
      contact: {
        linkedin: t('benignaSambo.contact.linkedin'),
      },
      achievements: [
        t('benignaSambo.achievements.0'),
        t('benignaSambo.achievements.1'),
        t('benignaSambo.achievements.2'),
        t('benignaSambo.achievements.3'),
      ],
    },
    {
      name: "Francisco Pontes",
      role: t('franciscoPontes.role'),
      shortDescription: t('franciscoPontes.shortDescription'),
      image: "/img/zenildo.jpeg",
      fullDescription: t('franciscoPontes.fullDescription'),
      contact: {
        linkedin: t('franciscoPontes.contact.linkedin'),
      },
      achievements: [
        t('franciscoPontes.achievements.0'),
        t('franciscoPontes.achievements.1'),
        t('franciscoPontes.achievements.2'),
        t('franciscoPontes.achievements.3'),
        t('franciscoPontes.achievements.4'),
      ],
    },    
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const slidesToShow = Math.min(leaderCards.length, 3);

  const sliderSettings = {
    infinite: slidesToShow > 1,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    dots: slidesToShow > 1,
    arrows: slidesToShow > 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(leaderCards.length, 2),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="direction" className="bg-gray-50">
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

      <div className="container mx-auto px-4 py-16">
        <div className="w-full">
        <Slider {...sliderSettings}>
  {leaderCards.map((card, index) => (
    <div key={index} className="px-2 h-full">
      <div className="h-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full min-h-[240px]">
          <div className="relative p-6 flex flex-col flex-grow">
            <div className="absolute top-4 right-4">
              <button onClick={() => openModal(card.image)}>
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                />
              </button>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2 pr-16">
              {card.name}
            </h3>

            <p className="text-gray-600 text-sm flex-grow mb-4 overflow-hidden">
              {card.fullDescription}
            </p>

            <div className="flex justify-between items-center mt-auto pt-2">
              <div className="flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">{card.role}</span>
                <a
                  href={`https://${card.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Linkedin size={18} />
                </a>
              </div>
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
            </div>

            {expandedCard === index && (
              <div className="mt-4 animate-fadeIn">
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
      </div>
    </div>
  ))}
</Slider>

        </div>
      </div>

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
            >
              ✕
            </button>
            <img
              src={modalImage}
              alt="Full size"
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

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