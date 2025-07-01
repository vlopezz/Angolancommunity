import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Community from './pages/Community';
import Direction from './pages/Direction';
import AboutAngola from './pages/AboutAngola';
import AboutRomania from './pages/AboutRomania';
import StudyInRomania from './pages/StudyInRomania';
import Partners from './pages/Partners';
import Gallery from './pages/Gallery';
import Resources from './pages/Resources';
import Registration from './pages/Registration'; 
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <div className="h-1 bg-yellow-400"></div>
                  <div className="h-1 bg-red-600"></div>
                  <div className="h-1 bg-black"></div>
                  <Community />
                  <div className="h-1 bg-yellow-400"></div>
                  <div className="h-1 bg-red-600"></div>
                  <div className="h-1 bg-black"></div>
                  <Direction />
                  <div className="h-1 bg-yellow-400"></div>
                  <div className="h-1 bg-red-600"></div>
                  <div className="h-1 bg-black"></div>
                  <AboutAngola />
                  <div className="h-1 bg-yellow-400"></div>
                  <div className="h-1 bg-red-600"></div>
                  <div className="h-1 bg-black"></div>
                  <AboutRomania />
                  <div className="h-1 bg-yellow-400"></div>
                  <div className="h-1 bg-red-600"></div>
                  <div className="h-1 bg-black"></div>
                  <StudyInRomania />
                  <div className="h-1 bg-yellow-400"></div>
                  <div className="h-1 bg-red-600"></div>
                  <div className="h-1 bg-black"></div>
                  <Partners />
                  <div className="h-1 bg-yellow-400"></div>
                  <div className="h-1 bg-red-600"></div>
                  <div className="h-1 bg-black"></div>
                  <Gallery />
                </>
              } />
              <Route path="/resources" element={<Resources />} />
              <Route path="/registration" element={<Registration />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;