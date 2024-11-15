import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Music, Sun, Users, Coffee, Heart, Globe } from "lucide-react";

const AboutAngola: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <MapPin className="w-6 h-6 text-yellow-500" />,
      title: t("strategicLocation"),
      description: t("strategicLocationDesc"),
    },
    {
      icon: <Music className="w-6 h-6 text-yellow-500" />,
      title: t("richCulture"),
      description: t("richCultureDesc"),
    },
    {
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      title: t("naturalBeauty"),
      description: t("naturalBeautyDesc"),
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: t("diversePeople"),
      description: t("diversePeopleDesc"),
    },
    {
      icon: <Coffee className="w-6 h-6 text-yellow-500" />,
      title: t("richResources"),
      description: t("richResourcesDesc"),
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-500" />,
      title: t("growingEconomy"),
      description: t("growingEconomyDesc"),
    },
  ];

  const sections = [
    {
      title: t("culturalHeritage"),
      content: t("culturalHeritageContent"),
      image:
        "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      stats: [
        { value: "20+", label: t("ethnicGroups") },
        { value: "100+", label: t("traditionalDances") },
        { value: "40+", label: t("languagesDialects") },
      ],
    },
    {
      title: t("naturalWonders"),
      content: t("naturalWondersContent"),
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
      stats: [
        { value: "1,600km", label: t("coastline") },
        { value: "6", label: t("nationalParks") },
        { value: "1000+", label: t("speciesOfBirds") },
      ],
    },
    {
      title: t("modernAngola"),
      content: t("modernAngolaContent"),
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      stats: [
        { value: "8.5%", label: t("gdpGrowth") },
        { value: "60%", label: t("youngPopulation") },
        { value: "#1", label: t("oilProducer") },
      ],
    },
  ];

  return (
    <div id="about-angola" className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt={t("angolaLandscapeAlt")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t("discoverAngola")}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t("angolaDescription")}
            </p>
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 flex items-center">
              {t("exploreMore")}
              <Heart className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`py-20 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2 relative">
                <div className="relative">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-500/10 rounded-full -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full -z-10"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {section.content}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {section.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="text-center p-4 bg-white rounded-lg shadow-md"
                    >
                      <div className="text-2xl font-bold text-yellow-500 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("experienceAngola")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("joinUsInExploring")}
          </p>
          <div className="flex justify-center gap-4">
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300">
              {t("learnMore")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAngola;
