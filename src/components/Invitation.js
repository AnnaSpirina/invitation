import React from 'react';
import './Invitation.css';

const Invitation = () => {
  return (
    <section id="invitation" className="invitation">
      <div className="invitation_container">
        <h2 className="invitation_heading">
          Дорогие родные и друзья!
        </h2>
        <h3 className="invitation_subheading">
          Мы женимся!
        </h3>
        <p className="invitation_text">
          И этот день мы хотим провести вместе с вами. Приглашаем вас на праздник нашей любви!
        </p>
      </div>
    </section>
  );
};

export default Invitation;