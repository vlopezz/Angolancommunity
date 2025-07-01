import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { Activity, FileText, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState<'atividades' | 'artigos'>('atividades');

  const slides = [
    t('resources.welcome1'),
    t('resources.welcome2'),
    t('resources.welcome3')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen" style={{ margin: 0, padding: 0 }}>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        {/* Banner com slider */}
        <section className="w-full overflow-hidden relative" style={{ marginTop: '-80px' }}>
          <div className="w-full h-48 md:h-64 overflow-hidden">
            <div
              className="flex transition-transform duration-[1200ms] ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-full flex-shrink-0 h-48 md:h-64 flex items-center justify-center text-center px-4 text-white ${
                    index === 0 ? 'bg-[#002868]' : index === 1 ? 'bg-[#004080]' : 'bg-[#0055a4]'
                  }`}
                >
                  <p className="text-lg md:text-xl font-semibold">{slide}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Menu de Navegação */}
        <section className="py-10 bg-gray-300 relative">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button
              onClick={() => setActiveSection('atividades')}
              className={`px-6 py-3 rounded-lg text-center hover:bg-gray-400 transition-colors duration-300 w-full md:w-auto flex items-center justify-center space-x-2 ${activeSection === 'atividades' ? 'bg-transparent' : 'bg-gray-300'}`}
            >
              <Activity size={20} className={activeSection === 'atividades' ? 'text-blue-600' : ''} />
              <span className={activeSection === 'atividades' ? 'text-blue-600 font-semibold' : 'text-[#002868]'}>
                {t('resources.tabs.activities')}
              </span>
            </button>
            <button
              onClick={() => setActiveSection('artigos')}
              className={`px-6 py-3 rounded-lg text-center w-full md:w-auto flex items-center justify-center space-x-2 ${activeSection === 'artigos' ? 'bg-transparent' : 'bg-gray-300'} opacity-50 cursor-not-allowed`}
              disabled
            >
              <FileText size={20} className={activeSection === 'artigos' ? 'text-blue-600' : 'text-gray-500'} />
              <span className={activeSection === 'artigos' ? 'text-blue-600 font-semibold' : 'text-gray-500'}>
                {t('resources.tabs.articles')}
              </span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent">
            <div
              className={`h-1 bg-blue-600 transition-all duration-300`}
              style={{
                width: '50%',
                transform: activeSection === 'artigos' ? 'translateX(100%)' : 'translateX(0)',
              }}
            />
          </div>
        </section>

        {/* Atividades */}
        {activeSection === 'atividades' && (
          <section id="atividades" className="py-20">
            <div className="container mx-auto px-4 flex justify-center">
              <div className="max-w-sm w-full bg-blue-500 rounded-lg shadow-md p-4 sm:p-6 text-white flex flex-col items-center justify-between min-h-[200px] sm:h-64 md:h-72 group relative overflow-hidden">
                <div className="flex flex-col items-center relative z-10">
                  <PenLine size={40} className="absolute opacity-10 pointer-events-none" style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                  <h2 className="text-xl sm:text-2xl font-bold text-center">{t('resources.activities.title')}</h2>
                  <p className="text-sm sm:text-base text-center mt-2">{t('resources.activities.edition')}</p>
                </div>

                <Link to="/registration"
                  className="relative inline-block mt-4 px-4 py-2 text-white font-medium hover:text-blue-200 focus:outline-none transition-all duration-300"
                >
                  <span className="relative z-10">{t('resources.activities.button')}</span>
                  <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 transition-all duration-500 ease-out transform scale-x-0 origin-left group-hover:scale-x-100 group-hover:opacity-100 active:opacity-100 active:scale-x-100" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Artigos */}
        {activeSection === 'artigos' && (
          <section id="artigos" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-[#002868] mb-6">{t('resources.articles.title')}</h2>
              <p className="text-lg mb-4">{t('resources.articles.subtitle')}</p>
              <ul className="mt-4 space-y-2">
                <li><a href="/files/tutorial.pdf" className="text-blue-600 hover:underline">{t('resources.articles.tutorial')}</a></li>
                <li><a href="/files/guide.docx" className="text-blue-600 hover:underline">{t('resources.articles.guide')}</a></li>
                <li><a href="https://example.com" className="text-blue-600 hover:underline">{t('resources.articles.link')}</a></li>
              </ul>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Resources;
