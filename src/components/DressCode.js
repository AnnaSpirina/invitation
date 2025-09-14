import React from 'react';
import './DressCode.css';

const DressCode = () => {
  const colors = [
    { code: '#e8b5b5', name: 'светло-розовый' },
    { code: '#cf9e76', name: 'бежевый' },
    { code: '#fea33bff', name: 'светло-оранжевый' },
    { code: '#995115', name: 'приглушённый оранжевый' },
    { code: '#a63030', name: 'алый' },
    { code: '#7b0709ff', name: 'бордовый' },
    { code: '#4d0001ff', name: 'шоколадный' },
    { code: '#364230', name: 'оливковый' },
    
  ];

  return (
    <section id="dress-code" className="dress-code">
      <div className="dress-code_container">
        <h2 className="dress-code_title">Дресс-код</h2>
        
        <p className="dress-code_description">
          Пожалуйста, поддержите атмосферу праздника элегантными нарядами, 
          соответствующими цветовой гамме свадьбы
        </p>

        <div className="dress-code_colors">
          {colors.map((color, index) => (
            <div key={index} className="dress-code_color-item">
              <div 
                className="dress-code_color-circle"
                style={{ backgroundColor: color.code }}
                title={color.name}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCode;