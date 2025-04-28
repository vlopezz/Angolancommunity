import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Community from './pages/Community';
import Direction from './pages/Direction';
import AboutAngola from './pages/AboutAngola';
import AboutRomania from './pages/AboutRomania';
import StudyInRomania from './pages/StudyInRomania';
import Partners from './pages/Partners';
import Highlight from './pages/Highlight';
import Gallery from './pages/Gallery';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
          <div className="h-1 bg-yellow-400"></div>
          <div className="h-1 bg-red-600"></div>
          <div className="h-1 bg-black"></div>
          {/* Community */}
          <Community />
          <div className="h-1 bg-yellow-400"></div>
          <div className="h-1 bg-red-600"></div>
          <div className="h-1 bg-black"></div>
          {/* Direction */}
          <Direction />
          <div className="h-1 bg-yellow-400"></div>
          <div className="h-1 bg-red-600"></div>
          <div className="h-1 bg-black"></div>
          
          {/* AboutAngola */}
          <AboutAngola />
          <div className="h-1 bg-yellow-400"></div>
          <div className="h-1 bg-red-600"></div>
          <div className="h-1 bg-black"></div>
          
          {/* AboutRomania */}
          <AboutRomania />
          <div className="h-1 bg-yellow-400"></div>
          <div className="h-1 bg-red-600"></div>
          <div className="h-1 bg-black"></div>
          
          {/* StudyInRomania */}
          <StudyInRomania />
          <div className="h-1 bg-yellow-400"></div>
          <div className="h-1 bg-red-600"></div>
          <div className="h-1 bg-black"></div>
         
          {/* Partners */}
          <Partners />
          <div className="h-1 bg-yellow-400"></div>
          <div className="h-1 bg-red-600"></div>
          <div className="h-1 bg-black"></div>
          <Gallery />
          {/*<AdminDashboard />*/}
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;