import React from 'react';
import './Place.css';
import photo1 from '../assets/images/place1.jpg';
import photo2 from '../assets/images/place2.jpg';

const Place = () => {
  const handleMapClick = () => {
    window.open('https://yandex.ru/maps/?um=constructor%3Acddc15e7c4f853d8f981f56aaa523d73e436ce774b42ac0b61213f4788d0632c&source=constructorLink', '_blank');
  };

  return (
    <section id="place" className="place">
      <div className="place_container">
        {/* Фотографии */}
        <div className="place_photos">
          <div className="place_photo-container">
            <img 
              src={photo1} 
              className="place_photo"
            />
          </div>
          
          <div className="place_photo-container">
            <img 
              src={photo2} 
              className="place_photo"
            />
            <button 
              className="place_map-button"
              onClick={handleMapClick}
              aria-label="Посмотреть на карте"
            >
              <span className="place_map-text">Посмотреть на карте</span>
            </button>
          </div>
        </div>

        {/* Заголовок */}
        <h2 className="place_title">Место торжества</h2>
        
        {/* Адреса */}
        <div className="place_addresses">
          <p className="place_address-text">
            г. Пермь, ул. Мира, д. 15 (ЗАГС)
            <br />
            г. Пермь, ул. Мира, д. 45Б (Elements Perm Hotel 4*)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Place;