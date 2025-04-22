import React from 'react'
import {homeSlide} from '../../Data'
import parse from 'html-react-parser';
import ScrollLink from '../link/ScrollLink';
import { FaCircleArrowRight, FaArrowLeft,FaArrowRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import './home.css';


const Home = () => {
  return (
    <section className="home">
       <Swiper 
       speed={1000}
       loop={true}
        modules={[Navigation]} 
       navigation={{
        nextEl: '.next-btn',
        prevEl: '.prev-btn',

       }}  
      
       className="mySwiper">
        {
          homeSlide.map(({img,title,description}, index) => {
           return <SwiperSlide className='home-slide section' style={{backgroundImage: `url(${img})`,
           backgroundRepeat: 'cover',}} key={index}>
            <div className="home-data container">
              <h3 className="home-subtitle">Welcome To Restrou!</h3>
              <h1 className="home-title">{parse(title)}</h1>
              <p className="home-description">{description}</p>

            <div className="home-buttons">
                <ScrollLink 
                     to='about' 
                      name='About More'
                      className='button'
                       icon={<FaCircleArrowRight className='button-icon'/>}
                                />
                <ScrollLink 
                     to='menu' 
                      name='Check Menu'
                      className='button home-button'
                       icon={<FaCircleArrowRight className='button-icon'/>}
                                />
            </div>
            </div>
           </SwiperSlide>;
          })
        }
        <button className="swiper-btn next-btn">
          <FaArrowRight/>
          
        </button>
        <button className="swiper-btn prev-btn">
         
          <FaArrowLeft/>
        </button>
      </Swiper>
    </section>
  )
}

export default Home
