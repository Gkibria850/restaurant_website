import React from 'react'
import SectionTitle from '../title/SectionTitle'
import './gallery.css'
import { gallery } from '../../Data'
import { RiAddLargeLine } from 'react-icons/ri'

const Gallery = () => {
  return (
  
      <section className="gallery section">
        <SectionTitle 
          subtitle="Our Photo Gallery" 
          title={<>Let's Check Our <span>Photo Gallery</span></>} 
        />

        <div className="gallery-container container">
          {gallery.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item} alt={`gallery-${index}`} className="gallery-img" />
              <a href={item} className="gallery-link">
                <RiAddLargeLine />
              </a>
            </div>
          ))}
        </div>
      </section>
    
  )
}

export default Gallery
