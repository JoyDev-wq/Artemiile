import React from "react";
import "./Exhibition.css";
import video_1 from "../../assets/exhibitions/page-5-1.webm";
import video_2 from "../../assets/exhibitions/page-5-2.webm";
import video_3 from "../../assets/exhibitions/page-5-3.webm";

const exhibition = [
  {
    heading: "Humanity",
    date: "December 2023",
    video: video_1,
  },
  {
    heading: "NFT Paris",
    date: "February 2024",
    video: video_2,
  },
  {
    heading: "Femme Futura",
    date: " April 2024",
    video: video_3,
  },
];

const Exhibition = () => {
  return (
    <div className="exhibition">
      <h1 className="ex-heading">
        <span>E</span>xhibitions
      </h1>
      <div className="columns">
        {exhibition.map((item, idx) => (
          <div className="column-1" key={idx}>
            <div className="column-text">
              <h1 className="column-heading">{item.heading}</h1>
              <p className="date">{item.date}</p>
            </div>
            <div className="shadow"></div>
            <div className="column-video">
              <video autoPlay loop muted src={item.video}></video>
            </div>
          </div>
        ))}
      </div>

      <div className="exb-text">
        <p>
          Over the years, I have noticed that you can express yourself in
          different ways.
        </p>

        <div className="exb-flex-para">
          <p> Commercial projects are not suitable for this.</p>
          <p>That's why I periodically release 3D collections.</p>
        </div>
        <p>Some of them appear in museums in various countries.</p>
      </div>
    </div>
  );
};

export default Exhibition;
