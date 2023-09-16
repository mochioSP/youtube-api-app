import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { VideoCard } from "../../molecules/VideoCard";
import { useToyPoodleVideo } from "../../../../src/hooks/useToyPoodleVideo";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ToyPoodle: FC = memo(() => {
  const { getToyPoodleVideo, videos } = useToyPoodleVideo();

  useEffect(() => getToyPoodleVideo(), [getToyPoodleVideo]);

  return (
    <>
      <p style={{ textAlign: "center" }}>トイプードル動画</p>
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
