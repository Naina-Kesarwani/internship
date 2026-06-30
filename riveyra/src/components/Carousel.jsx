// Carousel.jsx

import React from "react";
import "./Carousel.css";
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCreative, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "NDRF",
    p:"State-wide file management platform with one-click retrieval, audit trails, and enterprise-grade security.",
    image:
      c1,
  },

  {
    id: 2,
    title: "NIEDO",
     p:"Seamless UX that set a new benchmark for excellence in public-sector digital experiences.",
    image:
      c2,
  },

  {
    id: 3,
    title: "Martolia Group",
    p:"RealEstate platform with property listings, virtual tours, and seamless booking capabilities.",
    image:
      c3,
  },

  {
    id: 4,
    title: "DGFASLI",
    p:"Full government portal redesign with WCAG compliance, cross-device accessibility, and faster performance.",
    image:
      c4,
  },
{
    id: 1,
    title: "SDRF",
    p:"State-wide file management platform with one-click retrieval, audit trails, and enterprise-grade security.",
    image:
      c1,
  },

  {
    id: 2,
    title: "NIEDO",
     p:"Seamless UX that set a new benchmark for excellence in public-sector digital experiences.",
    image:
      c2,
  },

  {
    id: 3,
    title: "Martolia Group",
    p:"RealEstate platform with property listings, virtual tours, and seamless booking capabilities.",
    image:
      c3,
  },

  {
    id: 4,
    title: "DGFASLI",
    p:"Full government portal redesign with WCAG compliance, cross-device accessibility, and faster performance.",
    image:
      c4,
  },
  
];

function Carousel() {
  return (
    <div className="carousel-section">
        <p className="carousel-para">CASE STUDIES</p>
      <h1 className="carousel-heading">Our Finest Work</h1>
       <div className="carousel-buttons">
        <button className="carousel-prev">
          <FaArrowLeft />
        </button>

        <button className="carousel-next">
          <FaArrowRight />
        </button>
      </div>
      <hr style={{margin:"5px"}}/>

      <Swiper
        modules={[EffectCreative, Navigation]}
        effect="creative"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        speed={700}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
        creativeEffect={{
          limitProgress: 2,

          prev: {
            translate: ["calc(-100% - 80px)", "80px", -200],
            rotate: [0, 0, -18],
            opacity: 0.35,
            scale: 0.82,
          },

          next: {
            translate: ["calc(100% + 80px)", "80px", -200],
            rotate: [0, 0, 18],
            opacity: 0.35,
            scale: 0.82,
          },
        }}
        className="arc-swiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="arc-slide">
            <div className="carousel-card">
              <img src={card.image} alt={card.title} />

              <div className="card-overlay">
                <div className="card-content">
                    <h2>{card.title}</h2>
                <p>{card.p}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  );
}

export default Carousel;