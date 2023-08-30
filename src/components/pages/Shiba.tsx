import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { VideoCard } from "../organism/video/VideoCard";
import { useShibaVideo } from "../hooks/useShibaVideo";
import { Slider } from "../teseSwiper";

export const Shiba: FC = memo(() => {
  const { getShibaVideo, videos } = useShibaVideo();

  useEffect(() => getShibaVideo(), []);

  return (
    <>
      <p>柴犬動画</p>
      <div>
        シベリアンハスキーは<Link to={`/siberianhusky/`}>こちら</Link>
      </div>
      <div>
        トイプードルは<Link to={`/ToyPoodle/`}>こちら</Link>
      </div>
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
        {videos.map((item) => (
          <SwiperSlide>
            <VideoCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
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
      <Slider /> */}
    </>
  );
});
