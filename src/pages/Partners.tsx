import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Building, Users, Globe } from 'lucide-react';

const Partners: React.FC = () => {
  const { t } = useTranslation();

  const partners = [
    {
      name: 'Numabox',
      logo: '/img/LogoQ.png',
      description: '',
      website: 'https://numabox.com/',
      type: 'Culture'
    },
    {
      name: 'Weblack',
      logo: '/img/weblack.jpg',
      description: '',
      website: 'https://www.youtube.com/@WEBLACK54',
      type: 'Culture'
    },
    {
      name: 'Numabox Podcast',
      logo: '/img/numabox-podcast.jpg',
      description: 'The objectives of the Podcast is to talk to different people in different cultural and educational domains 🇷🇴🇦🇴.',
      website: 'https://www.youtube.com/@NumaBox_Podcast_Oficial',
      type: 'Entreteiment'
    },
    {
      name: 'CNRR',
      logo: '/img/cnnr_logo.png',
      description: 'The Romanian National Council for Refugees Foundation (CNRR) is a non-governmental organization founded in 1998 with the status of public utility since 2003.',
      website: 'https://www.cnrr.ro/index.php/ro/',
      type: 'Academic'
    },
    {
      name: 'Cakes By Steezy',
      logo: '/img/cakebysteezy.jpg',
      description: '',
      website: 'https://www.instagram.com/cakesbysteezy/',
      type: 'Cake designer'
    }
  ];

  return (
    <div id="partners" className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">{t('partners')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('partnersDescription')}
          </p>
        </div>
      </div>

      {/* Stats Section 
      <div className="bg-white py-12 shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-gray-600">Partner Universities</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Years of Collaboration</p>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Partners Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="p-8">
                <div className="h-32 flex items-center justify-center mb-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Visit Website
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnership?</h2> 
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;