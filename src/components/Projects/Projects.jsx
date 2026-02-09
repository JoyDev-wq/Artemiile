import React, { useEffect, useLayoutEffect } from "react";
import "./Projects.css";
import projects from "../../projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".right",
        { opacity: 1 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".right",
            start: "top 10%",
            end: "bottom 60%",
            // markers: true,
            pin: true,
            scrub:4,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="projects">
      <div className="left">
        {projects.map((item, idx) => (
          <div key={idx} className="project-map">
            <div className="container">
              <div className="bg-img">
                <img src={item.img} alt="" />
              </div>
              <div className="vid">
                <div className="heading">
                  <p>{item.p_name}</p>
                  <p>{item.date}</p>
                </div>
                <div>
                  <div className="video">
                    <video autoPlay loop muted src={item.video}></video>
                  </div>
                  <div className="skills">
                    <p>{item.skill1}</p>
                    <p>{item.skill2}</p>
                    <p>{item.skill3}</p>
                    <p>{item.skill4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="right">
        <div id="heading">
          <h1>
            <span>F</span>eatured <br /> <span>P</span>rojects
          </h1>
          <h1>11</h1>
        </div>

        <div className="btn">
          <p>View All</p>
          <p>47</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
