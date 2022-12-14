import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {Pagination} from 'swiper';
import 'swiper/css/pagination' //..swiper css pagination 
import 'swiper/css' //... css for swiper 

const Testimonial = () => {

  //....clients array obj
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];
//....end.... clients......
  return (
    <div className='t-wrapper' id='Testimonials'>
      <div className="t-heading">
        <span>Clients </span>
        <span>Feedback </span>
        <span>From My Services</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider here...*/}
      <Swiper
      
      modules = {[Pagination]}
      slidesPerView = {1}
      pagination = {{clickable: true}}
      >

          {clients.map((client, index) => {
            return(
              <SwiperSlide key={index}>
                <div className="testimonial">
                <img src={client.img} alt="" />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default Testimonial