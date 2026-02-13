import React, { useEffect } from "react";
import "./Footer.css";
// import gsap from "gsap";

const Footer = () => {


  // useEffect(()=>{
  //   gsap.fromTo("a .bg-white",
  //     {x:100},
  //     {x:0, duration:1, ease:"power1.in"}
  //   )
  // },[])


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
            <p>
              <span>M</span>enu
            </p>
            <div className="menu-link">
              <div className="column1">
                <a href="">
                  <p>Work</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>Exhibition</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>Stories</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>About</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>Inquries</p>
                  <div className="bg-white"></div>
                </a>
              </div>
              <div className="column2">
                <a href="">
                  <p>Cookies Policy</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>Privacy Policy</p>
                  <div className="bg-white"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="social">
            <p>
              <span>S</span>ocial
            </p>
            <div className="column3">
                <a href="">
                  <p>Work</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>Exhibition</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>Stories</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>About</p>
                  <div className="bg-white"></div>
                </a>
                <a href="">
                  <p>Inquries</p>
                  <div className="bg-white"></div>
                </a>
              </div>
          </div>
        </div>
        <div className="footer-right">
          <p>Newsletter</p>
          <div className="subscribe">
            <p>
              Subscribe to stay up to date with the latest news and projects.
            </p>
            <div className="input">
              <input type="text" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="end-text">
          <p><a href="/">To Top</a></p>
          <p>©2026 Artemii Lebedev</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
