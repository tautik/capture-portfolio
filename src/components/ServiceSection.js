import React from "react";
//importing icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServiceSection = () => {
  return (
    <div className="discription">
      <h2>
        High <span>Quality</span> Cards
      </h2>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={clock} alt="clock icon" />
            <h3>Efficeint</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="teamwork icon" />
            <h3>Teamwork</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={diaphragm} alt="didaphragm icon" />
            <h3>Diaphragm</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={money} alt="money icon" />
            <h3>Money</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
};

export default ServiceSection;
