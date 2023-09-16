import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { VideoCard } from "../../molecules/VideoCard";
import { useShibaVideo } from "../../../../src/hooks/useShibaVideo";

export const Shiba: FC = memo(() => {
  const { getShibaVideo, videos } = useShibaVideo();
  useEffect(() => getShibaVideo(), [getShibaVideo]);

  return (
    <>
      <p style={{ textAlign: "center" }}>柴犬動画</p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {videos.map((item) => (
          <SwiperSlide>
            <VideoCard video={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
