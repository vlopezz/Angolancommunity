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
  const [modalImage, setModalImage] = useState<string | null>(null); // Estado para o modal

  const leaderCards: LeaderCard[] = [
    {
    name: "Vencislau Mario",
    role: "President",
    image: "/img/mario_perfil.jpeg",
    shortDescription: " ",
    fullDescription:
    "President of the Angolan Community in Romania since September 2023. Summer School in Diplomacy and Negotiations at the Institute of International Negotiations, Faculty of European Studies, Romania",
    contact: {
    linkedin: "linkedin.com/in/ovencislaumario/",
    },
    achievements: [
    "Bachelor's Degree in Diplomacy, Babes-Bolyai University, Cluj-Napoca, Romania ",
    "Summer School in Diplomacy and Negotiations at Faculty of European Studies UBB ",
    "Former President of the Angolan Students Association in Turkey (2019–2021).",
    ],
    },
    
    
    {
    name: "Geovane A. C. Moisés",
    role: "Spokesperson",
    image: "/img/geovane.jpeg",
    shortDescription: " ",
    fullDescription:
    "Spokesperson for the Angolan Community in Romania and head of the communications and image department. Student of Mechatronics and Robotics Engineering at the Polytechnic University of Bucharest.",
    contact: {
    linkedin: "linkedin.com/in/geovane-moisés-a05665199/",
    },
    achievements: [
    "Head of the Communication & Image Department, Angolan Community in Romania",
    "Academic Consultant",
    "International Scholarship Specialist",
    "YouTuber",
    "Designer",
    "Entrepreneur",
    ],
    },
    
    {
    name: "Ruben Bunga",
    role: "Finance secretary",
    image: "/img/ruben.jpg",
    shortDescription: " ",
    fullDescription:
    "Graduated from the University of Petroleum and Gas, Faculty of Economics specializing in finance and banking. Master in banking system management at the University of Petroleum and Gas, Faculty of Economics.",
    contact: {
    linkedin: "linkedin.com/in/bunga-ruben-5394012a3",
    },
    achievements: [
    " Master's degree in economics from the University of Economics of Porto-Portugal FEP.",
    "Em breve",
    ],
    },
    
    {
    name: "Telmo da Silva",
    role: "Sci-Tech secretary",
    image: "/img/telminho.jpeg",
    shortDescription: " ",
    fullDescription:
    "Computer Engineering student at the Polytechnic University of Bucharest,with strong interest in systems development, cybersecurity, and emerging technologies.Focused on building practical skills.",
    contact: {
    linkedin: "#link",
    },
    achievements: [
    "Programmer",
    "Programmer",
    ],
    },
    
    {
    name: "Jorge Caetano",
    role: "Secretary of Sport",
    image: "/img/caetano.jpeg",
    shortDescription: " ",
    fullDescription:
    "Finance and Banking student at the Petroleum-Gas University of Ploieşti, with technical training in Accounting and Finance.Skilled in SQL programming, database design, and database foundations.",
    contact: {
    linkedin: "#link",
    },
    achievements: [
    "Soon",
    "Soon",
    ],
    },
    
    {
    name: "Desidério Nungulo ",
    role: "Secretary of Culture",
    image: "/img/desione.jpeg",
    shortDescription: " ",
    fullDescription:
    " Inginer mecanic care urmează cursurile de masterat la București, este de asemenea, și un artist muzical și de modelaj de origine angoleză. El a început să cânte rap în 2007, în Luanda, în cadrul unui concurs școlar. ",
    contact: {
    linkedin: "#link",
    },
    achievements: [
    "Odată ajuns în România, și-a perfecționat și diversificat stilul, iar astăzi Nungulo se dedică și stilurilor Afro-Trap, Kizomba, Guetto-Zouk, Kuduro (stil de muzică etno-populară în Angola)",
    "în ultima vreme, colaborează cu artiști internaționali, experimentând stiluri noi și diferite. Vibrația sa va face cu siguranță publicul să vibreze!",
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
              <div key={index} className="px-2">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                  <div className="relative p-6 flex flex-col h-full">
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
                    <p className="text-gray-600 text-sm flex-grow mb-4">
                      {card.fullDescription}
                    </p>
                    <div className="flex justify-between items-center">
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
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal para exibir a imagem completa */}
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