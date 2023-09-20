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
      <div>
        <h1 style={{ textAlign: "center" }}>柴犬動画</h1>
      </div>
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
