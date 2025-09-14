import React from 'react';
import './Hero.css';
//Импорт изображения
import cornerTopRight from '../assets/images/flowers.jpg';
import cornerBottomLeft from '../assets/images/flowers.jpg';
//Импорт компонента навигации
import Navigation from './Navigation';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Navigation />
      {/* Декоративные изображения */}
      <img src={cornerTopRight} alt="Угловой декор" className="hero_decor hero_decor_top_right" />
      <img src={cornerBottomLeft} alt="Угловой декор" className="hero_decor hero_decor_bottom_left" />
      
      <div className="hero-overlay">
        <div className="names-container">
          <div className="name name-first">Никита</div>
          <div className="ampersand">&</div>
          <div className="name name-second">Анна</div>
        </div>
        <p className="hero-date">15 ноября 2025</p>
      </div>
    </section>
  );
};

export default Hero;