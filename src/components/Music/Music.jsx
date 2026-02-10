import React from 'react'
import './Music.css'
import bg_video from '../../assets/music/bg-page3.mp4';
import arrow from '../../assets/music/arrow-inquiries.svg';
import music_video from '../../assets/music/page-3.mp4';

const Music = () => {
  return (
    <div className='music'> 
      <div className='heading-text'>
        <p>Part of my main activity includes <br /> preparing visualizations for <br /> music releases by electronic  <br />musicians. It adds drive to me.</p>
      </div>
      <div className='video-section'>
        <div className="bg-vid">
          <video autoPlay loop muted src={bg_video}></video>
        </div>
        <div className='music-section'>
          <h1>Music Visuals</h1>
          <div className='reel'>
            <video autoPlay loop muted src={music_video}></video>
            <img src={arrow} alt="" />
            <p>Recent Release</p>
          </div>
          <div className='song'>
            <p>Goom Gum — To Trajadão (Original Mix)</p>
            <p>Art direction, cover design & motion for live set.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music
