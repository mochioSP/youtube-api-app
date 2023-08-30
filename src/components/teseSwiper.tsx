import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = () => {
  return (
    <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
      <SwiperSlide>
        <img src="http://placehold.jp/700x400.png?text=1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="http://placehold.jp/700x400.png?text=2" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="http://placehold.jp/700x400.png?text=3" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="http://placehold.jp/700x400.png?text=4" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
