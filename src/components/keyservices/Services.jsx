import React from "react";
import "./Services.css";
import video_1 from "../../assets/key-services/page-4-1.mp4";
import services from "../../services";
import {services2} from "../../services";


const Services = () => {
  return (
    <div className="services">
      <div className="grid-1">
        <div className="box1">
          <div className="inner-box">
            <div className="visible-text">
              <div className="circle"></div>
              <div className="box-heading">
                <h1>Art Direction</h1>
              </div>
            </div>
            <video
              className="bg-video"
              autoPlay
              loop
              muted
              src={video_1}
            ></video>
          </div>
        </div>

        <div className="box2">
          <div className="inner-box">
            <div className="visible-text">
              <h1>Key Services</h1>
              <div className="box-heading">
                <h1 className="para">This is what I focus on.</h1>
                <h1 className="para">Additional services are available upon request.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {services.map((item, idx) => (
          <div key={idx} className="box-1">
            {/* <div className="box1"> */}
              <div className="inner-box">
                <div className="visible-text">
                  <div className="circle"></div>
                  <div className="box-heading">
                    <h1>{item.heading}</h1>
                  </div>
                </div>
                <video
                  className="bg-video"
                  autoPlay
                  loop
                  muted
                  src={item.vid}
                ></video>
              </div>
            {/* </div> */}
          </div>
        ))}
      </div>

      <div className="grid-3">
        {services2.map((item, idx) => (
          <div key={idx} className="box-1">
            {/* <div className="box1"> */}
              <div className="inner-box">
                <div className="visible-text">
                  <div className="circle"></div>
                  <div className="box-heading">
                    <h1>{item.heading}</h1>
                  </div>
                </div>
                <video
                  className="bg-video"
                  autoPlay
                  loop
                  muted
                  src={item.vid}
                ></video>
              </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
