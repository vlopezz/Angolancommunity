import React from 'react';
import { useTranslation } from 'react-i18next';

const Highlight: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="highlight" className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold text-blue-500 mb-8">{t('highlightTitle')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200">
          {/* Placeholder for the image */}
          <div className="h-96 bg-gray-400"></div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">{t('secondaryHeadline')}</h2>
          <p className="mb-4">{t('loremIpsum')}</p>
          <ul className="list-disc pl-5 mb-6">
            <li>{t('bulletPoint1')}</li>
            <li>{t('bulletPoint2')}</li>
            <li>{t('bulletPoint3')}</li>
          </ul>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black-500 mr-4">{t('callToAction')}</span>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              {t('clickHere')}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="flex items-start">
          <div className="w-24 h-24 bg-gray-300 mr-4"></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{t('testimonialTitle')}</h3>
            <p>{t('testimonialText')}</p>
            <div className="flex items-center mt-2">
              <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-500 font-semibold">{t('secure')}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('moreInformationTitle')}</h3>
          <p>{t('moreInformationText')}</p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;