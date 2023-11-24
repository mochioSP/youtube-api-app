import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

import { VideoCard } from "../../molecules/VideoCard";
import { useToyPoodleVideo } from "../../../../src/hooks/useToyPoodleVideo";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

export const ToyPoodle: FC = memo(() => {
  const { getToyPoodleVideo, videos } = useToyPoodleVideo();

  useEffect(() => getToyPoodleVideo(), [getToyPoodleVideo]);

  return (
    <>
      <div className="swiper-container">
        <Swiper
          mousewheel={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Mousewheel]}
          className="my-swiper"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.etag}>
              <VideoCard video={video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
});
