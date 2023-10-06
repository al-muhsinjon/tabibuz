"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Container from "../container";
import InfoList from "../info-list";
import { doctorInfo } from "@/constants";

export default function Info() {
  return (
    <div className="w-full relative mt-20 h-auto">
      <Container>
        <div className="w-full ">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              560: {
                slidesPerView: 2,
              },
              1020: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper text-black "
          >
            {doctorInfo.map((info) => (
              <SwiperSlide key={info.id}>
                <InfoList info={info} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-next mr-4"></button>
          <button className="swiper-button-prev ml-4"></button>
        </div>
      </Container>
    </div>
  );
}
