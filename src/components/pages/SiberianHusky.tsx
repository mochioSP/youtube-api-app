import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { VideoCard } from "../organism/video/VideoCard";
import { useSiberianHuskyVideo } from "../../hooks/useSiberianHuskyVideo";

import "swiper/css";

export const SiberianHusky: FC = memo(() => {
  const { getSiberianHuskyVideo, videos } = useSiberianHuskyVideo();

  useEffect(() => getSiberianHuskyVideo(), [getSiberianHuskyVideo]);

  return (
    <>
      <p>シベリアンハスキー動画</p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {videos.map((item) => (
          <SwiperSlide>
            <VideoCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
