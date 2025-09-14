import React from 'react';
import './Timing.css';

const Timing = () => {
  return (
    <section id="details" className="timing">
      <div className="timing_container">
        <div className="timing_background"></div>
        <div className="timing_content">
            <p className="timing_date">15/11/2025</p>
          <h2 className="timing_title">Программа торжества</h2>
          <div className="timing_schedule">
            <div className="timing_item">
              <span className="timing_time">10:15</span>
              <span className="timing_event">Церемония в ЗАГСе</span>
            </div>
            <div className="timing_item">
              <span className="timing_time">13:00</span>
              <span className="timing_event">Сбор гостей в отеле</span>
            </div>
            <div className="timing_item">
              <span className="timing_time">14:00</span>
              <span className="timing_event">Начало банкета</span>
            </div>
            <div className="timing_item">
              <span className="timing_time">18:30</span>
              <span className="timing_event">Торт и бенгальские огни</span>
            </div>
            <div className="timing_item">
              <span className="timing_time">20:00</span>
              <span className="timing_event">Окончание праздника</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timing;