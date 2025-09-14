import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    if (!isDesktop) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (!isDesktop) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navigation">
      {!isDesktop && (
        <button 
          className="navigation_toggle"
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span className={`navigation_hamburger ${isMenuOpen ? 'navigation_hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      )}

      <div className={`navigation_menu ${isMenuOpen ? 'navigation_menu-open' : ''} ${isDesktop ? 'navigation_menu-desktop' : ''}`}>
        <ul className="navigation_list">
          <li className="navigation_item">
            <button 
              onClick={() => scrollToSection('hero')}
              className="navigation_link"
            >
              Главная
            </button>
          </li>
          <li className="navigation_item">
            <button 
              onClick={() => scrollToSection('place')}
              className="navigation_link"
            >
              Место
            </button>
          </li>
          <li className="navigation_item">
            <button 
              onClick={() => scrollToSection('details')}
              className="navigation_link"
            >
              Тайминг
            </button>
          </li>
          <li className="navigation_item">
            <button 
              onClick={() => scrollToSection('dress-code')}
              className="navigation_link"
            >
              Дресс-код
            </button>
          </li>
          <li className="navigation_item">
            <button 
              onClick={() => scrollToSection('time')}
              className="navigation_link"
            >
              Чат гостей
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;