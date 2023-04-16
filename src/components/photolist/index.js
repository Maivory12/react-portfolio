import React, { useState } from 'react';
import Modal from '../Modal';
import Project1 from '../../assets/projectImage/WeatherMann-Screen-Record.gif';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "WeatherMann",
      image: Project1,
      skills: "HTML, CSS, JavaScript, JQuery, Moment.JS, BootStrap, Server-Side APIs: OpenWeather,UnSplash and Spotify",
      repo: "https://github.com/MontineSproul/the-a-team",
      deployedLink: "https://montinesproul.github.io/the-a-team/"
    },
    {

    },

  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  

   
  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto}  onClose={toggleModal} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;