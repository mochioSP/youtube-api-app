import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { VideoCard } from "../organism/video/VideoCard";
import { useToyPoodleVideo } from "../../hooks/useToyPoodleVideo";

export const ToyPoodle: FC = memo(() => {
  const { getToyPoodleVideo, videos } = useToyPoodleVideo();

  useEffect(() => getToyPoodleVideo(), [getToyPoodleVideo]);

  return (
    <>
      <p>トイプードル動画</p>
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
