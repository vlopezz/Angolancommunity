import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Book, Landmark, Users, Heart, Coffee } from 'lucide-react';

const AboutRomania: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: t('strategicLocation'),
      description: t('strategicLocationDesc')
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      title: t('richHeritage'),
      description: t('richHeritageDesc')
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t('diverseCulture'),
      description: t('diverseCultureDesc')
    }
  ];

  const sections = [
    {
      title: t('naturalBeauty'),
      content: t('naturalBeautyContent'),
      image: '/img/romania_beauty.jpg',
      stats: [
        { value: '14', label: t('nationalParks') },
        { value: '2,544m', label: t('highestPeak') },
        { value: '245km', label: t('blackSeaCoast') }
      ]
    },
    {
      title: t('historicalArchitecture'),
      content: t('historicalArchitectureContent'),
      image: '/img/bucuresti-parlamento.jpg',
      stats: [
        { value: '30+', label: t('unescoSites') },
        { value: '150+', label: t('medievalCastles') },
        { value: '8', label: t('culturalRegions') }
      ]
    },
    {
      title: t('modernRomania'),
      content: t('modernRomaniaContent'),
      image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      stats: [
        { value: '19M+', label: t('population') },
        { value: 'EU', label: t('euMemberSince') },
        { value: '#1', label: t('itGrowth') }
      ]
    }
  ];

  const gallery = [
    {
      url: 'https://images.unsplash.com/photo-1580844946486-f08607088f08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: t('transfagarasanHighway')
    },
    {
      url: '/img/peles-castle-sinaia-romania.jpg',
      caption: t('pelesCastle')
    },
    {
      url: '/img/bucuresti-old-town.jpg',
      caption: t('bucharestOldTown')
    },
    {
      url: '/img/painted-monasteries.jpg',
      caption: t('paintedMonasteries')
    }
  ];

  return (
    <div id="about-romania" className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/Romania_party_member_apartments.jpg"
            alt={t('romaniaLandscapeAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">{t('discoverRomania')}</h1>
            <p className="text-xl text-white/90 mb-8">{t('romaniaDescription')}</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center">
              {t('exploreMore')}
              <Heart className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <div key={index} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="lg:w-1/2 relative">
                <img 
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/10 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full -z-10"></div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{section.content}</p>
                <div className="grid grid-cols-3 gap-4">
                  {section.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-4 bg-white rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Image Gallery */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t('glimpsesOfRomania')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={item.url} 
                alt={item.caption}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('experienceRomania')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('joinUsInExploring')}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              {t('planYourVisit')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRomania;
