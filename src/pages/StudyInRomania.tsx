import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, BookOpen, Globe, Users, Building, ArrowRight, ExternalLink } from 'lucide-react';

const StudyInRomania: React.FC = () => {
  const { t } = useTranslation();

  const scholarshipPrograms = [
    {
      title: t('mfaTitle'),
      description: t('mfaDescription'),
      link: "https://studyinromania.gov.ro",
      icon: <Building className="w-12 h-12 text-blue-600" />
    },
    {
      title: t('ariceTitle'),
      description: t('ariceDescription'),
      link: "https://arice.gov.ro/1/burse-2024/",
      icon: <Globe className="w-12 h-12 text-blue-600" />
    },
    {
      title: t('unitbvTitle'),
      description: t('unitbvDescription'),
      link: "https://tas.unitbv.ro",
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />
    }
  ];

  const benefits = [
    {
      title: t('qualityEducationTitle'),
      description: t('qualityEducationDesc'),
      icon: <BookOpen className="w-8 h-8 text-blue-600" />
    },
    {
      title: t('culturalExchangeTitle'),
      description: t('culturalExchangeDesc'),
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      title: t('communitySupportTitle'),
      description: t('communitySupportDesc'),
      icon: <Users className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div id="study-in-romania" className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt={t('universityCampusAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">{t('studyInRomania')}</h1>
            <p className="text-xl mb-8">
              {t('studyInRomaniaDescription')}
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center">
              {t('startYourJourney')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">{t('supportAndIntegration')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('supportAndIntegrationDescription')}
          </p>
        </div>

        {/* Scholarship Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {scholarshipPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <a 
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                {t('learnMoreAboutScholarships')}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('whyStudyInRomania')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Support */}
        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('joinOurCommunity')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('communityDescription')}
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            {t('contactUs')}
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-1 mt-16">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt={t('campusLifeAlt')} className="w-full h-48 object-cover" />
        <img src="/img/upb.jpg" alt={t('studentsAlt')} className="w-full h-48 object-cover" />
        <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt={t('libraryAlt')} className="w-full h-48 object-cover" />
        <img src="/img/upgpic.jpg" alt={t('studyGroupAlt')} className="w-full h-48 object-cover" />
      </div>
    </div>
  );
};

export default StudyInRomania;
