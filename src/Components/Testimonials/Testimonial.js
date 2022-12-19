import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: profilepic1,
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit ullam, necessitatibus quasi itaque sit commodi quis quidem corporis expedita vitae eveniet?",
    },
    {
      img: profilepic2,
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit ullam, necessitatibus quasi itaque sit commodi quis quidem corporis expedita vitae eveniet?",
    },
    {
      img: profilepic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit ullam, necessitatibus quasi itaque sit commodi quis quidem corporis expedita vitae eveniet?",
    },
    {
      img: profilepic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit ullam, necessitatibus quasi itaque sit commodi quis quidem corporis expedita vitae eveniet?",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt=" " />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
