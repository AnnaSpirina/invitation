import React, { useState, useEffect } from 'react';
import './CountdownWithQR.css';
import qrCode from '../assets/images/qr.png'; // QR-код

const CountdownWithQR = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-11-15T10:15:00');
    
    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="time" className="countdown-qr">
      <div className="countdown-qr_container">
        <div className="countdown-qr_left">
          <div className="countdown-qr_qr-container">
            <h3 className="countdown-qr_qr-title">Добавляйтесь в общий <br></br><a href='https://t.me/+GxGltUlxLSEyODAy'>чат гостей</a></h3>
            <img 
              src={qrCode} 
              alt="QR-код для чата гостей" 
              className="countdown-qr_qr-code"
            />
          </div>
        </div>

        <div className="countdown-qr_right">
          <h2 className="countdown-qr_title">До торжества осталось</h2>
          
          <div className="countdown-qr_timer">
            <div className="countdown-qr_time-unit">
              <span className="countdown-qr_time-value">{timeLeft.days}</span>
              <span className="countdown-qr_time-label">дней</span>
            </div>
            
            <div className="countdown-qr_time-unit">
              <span className="countdown-qr_time-value">{timeLeft.hours}</span>
              <span className="countdown-qr_time-label">часов</span>
            </div>
            
            <div className="countdown-qr_time-unit">
              <span className="countdown-qr_time-value">{timeLeft.minutes}</span>
              <span className="countdown-qr_time-label">минут</span>
            </div>
            
            <div className="countdown-qr_time-unit">
              <span className="countdown-qr_time-value">{timeLeft.seconds}</span>
              <span className="countdown-qr_time-label">секунд</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownWithQR;