import React from "react";
import "./HeroSection.css";
import video from "../../assets/hero-section/hero-video.mp4";
import awards from '../../assets/hero-section/awards.jpg'
import arrow from '../../assets/hero-section/arrow-newest-2.svg'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="video-bg">
        <video src={video} autoPlay loop muted></video>
      </div>

      <div className="hero-content">
        <h1>
          <span>W</span>ork
        </h1>
        <h1>
          <span>E</span>xhibitions
        </h1>
      </div>

      <div className="awards">
        <div>
          <img className="awards-img" src={awards} alt="" />
        </div>
        <div className="text">
          <h2>CSS design Awards</h2>
          <div>
            <p className="bold-text">Designer of the Year, winner!</p>
            <p>Thanks everyone to support</p>
          </div>
        </div>
        <div className="dark-arrow">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
