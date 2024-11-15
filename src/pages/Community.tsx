import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Heart, Globe2 } from 'lucide-react';

const Community: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="community" className="relative">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="img/img-community-3.jpg"
            alt={t('communityGatheringAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white mb-4">{t('aboutCommunity')}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              {t('communityDescription1')}
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              {t('communityDescription2')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('unitedCommunity')}</h3>
                <p className="text-gray-600">{t('unitedCommunityDesc')}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('mutualSupport')}</h3>
                <p className="text-gray-600">{t('mutualSupportDesc')}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Globe2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('globalConnection')}</h3>
                <p className="text-gray-600">{t('globalConnectionDesc')}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="img/img-community-2.jpg"
              alt={t('communityMembersAlt')}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-red-600 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
