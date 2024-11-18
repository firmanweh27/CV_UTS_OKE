import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import Editing from '../assets/1.jpg';
import Menggambar from '../assets/2.jpg';
import Game from '../assets/3.jpg';
import Tidur from '../assets/4.jpg';
import Renang from '../assets/5.jpg';
import coding from '../assets/6.jpg';
import './hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "Editing", image: Editing },
    { name: "Menggambar", image: Menggambar },
    { name: "Game", image: Game },
    { name: "Tidur", image: Tidur },
    { name: "Renang", image: Renang },
    { name: "coding", image: coding },
  ];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image 
              src={hobby.image} 
              alt={hobby.name} 
              className="gallery-image" 
              layout="responsive" 
              width={150} 
              height={100} 
            />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;
