import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { VideoCard } from "../../molecules/VideoCard";
import { useSiberianHuskyVideo } from "../../../../src/hooks/useSiberianHuskyVideo";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SiberianHusky: FC = memo(() => {
  const { getSiberianHuskyVideo, videos } = useSiberianHuskyVideo();

  useEffect(() => getSiberianHuskyVideo(), [getSiberianHuskyVideo]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>シベリアンハスキー動画</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {videos.map((video) => (
          <SwiperSlide>
            <VideoCard video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
