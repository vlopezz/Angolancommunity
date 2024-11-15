import React from 'react';
import { useTranslation } from 'react-i18next';
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
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
            <li><a href="#community" onClick={() => scrollToSection('community')}>{t('community')}</a></li>
            <li><a href="#direction" onClick={() => scrollToSection('direction')}>{t('direction')}</a></li>
            <li><a href="#about-angola" onClick={() => scrollToSection('about-angola')}>{t('aboutAngola')}</a></li>
            <li><a href="#about-romania" onClick={() => scrollToSection('about-romania')}>{t('aboutRomania')}</a></li>
            <li><a href="#study-in-romania" onClick={() => scrollToSection('study-in-romania')}>{t('studyInRomania')}</a></li>
            <li><a href="#partners" onClick={() => scrollToSection('partners')}>{t('partners')}</a></li>
            <li><a href="#highlight" onClick={() => scrollToSection('highlight')}>{t('highlight')}</a></li>
            <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>{t('gallery')}</a></li>
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