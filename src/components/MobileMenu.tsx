import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 
import LanguageSwitcher from './LanguageSwitcher';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
      setTimeout(() => {
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
        onClose(); // Fecha o menu após rolar
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        onClose(); // Fecha o menu após rolar
      }
    }
  };


  return (
    <div className="fixed inset-0 z-50 bg-blue-600 text-white md:hidden">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-8">
          <a href="#home" className="text-2xl font-bold" onClick={() => scrollToSection('home')}>
            {t('siteName')}
          </a>
          <button onClick={onClose} aria-label="Close mobile menu">
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
          <li><a href="#community" onClick={() => scrollToSection('community')} className="text-[#002868] hover:text-gray-600">{t('community')}</a></li>
        <li><a href="#direction" onClick={() => scrollToSection('direction')} className="text-[#002868] hover:text-gray-600">{t('direction')}</a></li>
        <li><a href="#about-angola" onClick={() => scrollToSection('about-angola')} className="text-[#002868] hover:text-gray-600">{t('aboutAngola')}</a></li>
        <li><a href="#about-romania" onClick={() => scrollToSection('about-romania')} className="text-[#002868] hover:text-gray-600">{t('aboutRomania')}</a></li>
        <li><a href="#study-in-romania" onClick={() => scrollToSection('study-in-romania')} className="text-[#002868] hover:text-gray-600">{t('studyInRomania')}</a></li>
        <li><a href="#partners" onClick={() => scrollToSection('partners')} className="text-[#002868] hover:text-gray-600">{t('partners')}</a></li>
        <li><a href="#gallery" onClick={() => scrollToSection('gallery')} className="text-[#002868] hover:text-gray-600">{t('gallery')}</a></li>
        <li><Link to="/resources" onClick={onClose} className="text-[#002868] hover:text-gray-600">{t('resources')}</Link></li>
          </ul>
        </nav>
        <div className="mt-8">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;