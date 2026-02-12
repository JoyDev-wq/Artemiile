import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1>
          <span>N</span>ext
        </h1>
        <h1>
          <span>W</span>ork
        </h1>
      </div>
      <div className="footer-mid">
        <div className="footer-left">
          <div className="menu">
            <p><span>M</span>enu</p>
            <div className="menu-link">
              <ul>
                <li>Work</li>
                <li>Exhibition</li>
                <li>Stories</li>
                <li>About</li>
                <li>Inquries</li>
              </ul>
              <ul>
                <li>Cookies Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="social">
            <p><span>S</span>ocial</p>
            <ul>
              <li>Instagram</li>
              <li>(X)Twitter</li>
              <li>Linkedin</li>
              <li>Behance</li>
              <li>Dribble</li>
              <li>Patreon</li>
              
            </ul>
          </div>
        </div>
        <div className="footer-right">
            <p>Newsletter</p>
            <div className="subscribe">
                <p>Subscribe to stay up to date with the latest news and projects.</p>
                <div className="input">
                    <input type="text" placeholder="Email address"/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="end-text">
          <p>To Top</p>
          <p>©2026 Artemii Lebedev</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
