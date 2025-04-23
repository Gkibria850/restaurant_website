import React from 'react'
import SectionTitle from '../title/SectionTitle'
import Stars from '../stars/Stars'
import './testimonials.css' 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Quote from '../../assets/quote.svg'
import {testimonialItem} from'../../Data'

// import required modules
import { Pagination } from 'swiper/modules';


const Testimonials = () => {
  return (
   <section className="testimonials section">
     <SectionTitle 
          subtitle="Testimonials" 
          title={<>What Our Awesome  <span>Clients Say </span>About Us</>} 
        />

<Swiper 
      slidesPerView={1}
      grabCursor={true}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        576: {
          slidesPerView: 2,
          
        },
        
        1024: {
          slidesPerView: 3,
          
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
       
       className='container'
       >
        {
          testimonialItem.map(({img,name,description, stars}, index) => {
           return (
            <SwiperSlide 
              className='testimonials-item section' 
              key={index}>

                <div className="testimonials-bg">
                  <img src={Quote} alt="" className="testimonials-quote" />
                  <div className="testimonials-data">
                    <img src={img} alt="" className="testimonials-img" />
                    <div>
                      <h3 className="testimonials-name">{name}</h3>
                      <p className="testimonials-profile">Customers</p>
                    </div>
                    </div>
                    <p className="testimonials-description">{description}</p>
                    <Stars stars={stars}/>
                  </div>

             </SwiperSlide>
           );
          
          })
        }
       
      </Swiper>
   </section>
  )
}

export default Testimonials
