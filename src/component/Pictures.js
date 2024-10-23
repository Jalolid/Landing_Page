import React from 'react';
import '../style/Pictures.css'; // Pictures & Videos sahifasi uchun CSS fayl
import img1 from '../images/img1.jpg';
import img7 from '../images/img7.png';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import bmw2 from '../images/bmw_m5.jpg';

const PicturesVideos = () => {
  return (
    <div className="pictures-videos-container">
      <h1 className="title">Pictures & Videos</h1>

      <h2 className="section-title">Pictures</h2>
      <div className="gallery">
        <img src={img1} alt="Pamir" />
        <img src={img7} alt="Pamir" />
        <img src={img3} alt="Pamir" />
        <img src={img4} alt="Pamir" />
        <img src={img5} alt="Pamir" />
        <img src={bmw2} alt="Pamir" />
      </div>

      <h2 className="section-title">Videos</h2>
      <div className="videos">
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/watch?v=X2tCbElLjkE"
          title="Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/watch?v=HVjrQiklQwk"
          title="Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/watch?v=Wt-wa5Omld0"
          title="Video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default PicturesVideos;
