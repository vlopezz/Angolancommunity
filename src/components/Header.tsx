import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-[#002868] shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-24'}`}>
            <div className="flex items-center p-2 mr-2 mt-2 mb-2">
              <img src="/logo.jpg" alt="Logo" className="h-20 mr-4" />
              
            </div>
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>
          <nav className="hidden md:flex justify-between items-center py-4">
            <ul className="flex space-x-6">
              <li><a href="#community" onClick={() => scrollToSection('community')} className="hover:text-gray-600 transition-colors">{t('community')}</a></li>
              <li><a href="#direction" onClick={() => scrollToSection('direction')} className="hover:text-gray-600 transition-colors">{t('direction')}</a></li>
              <li><a href="#about-angola" onClick={() => scrollToSection('about-angola')} className="hover:text-gray-600 transition-colors">{t('aboutAngola')}</a></li>
              <li><a href="#about-romania" onClick={() => scrollToSection('about-romania')} className="hover:text-gray-600 transition-colors">{t('aboutRomania')}</a></li>
              <li><a href="#study-in-romania" onClick={() => scrollToSection('study-in-romania')} className="hover:text-gray-600 transition-colors">{t('studyInRomania')}</a></li>
              <li><a href="#partners" onClick={() => scrollToSection('partners')} className="hover:text-gray-600 transition-colors">{t
              ('partners')}</a></li>
              {/*<li><a href="#highlight" onClick={() => scrollToSection('highlight')} className="hover:text-gray-600 transition-colors">{t('highlight')}</a></li> */}
              
              <li><a href="#gallery" onClick={() => scrollToSection('gallery')} className="hover:text-gray-600 transition-colors">{t('gallery')}</a></li>
            </ul>
          </nav>
          <button
            className="md:hidden py-4 text-[#002868]"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
