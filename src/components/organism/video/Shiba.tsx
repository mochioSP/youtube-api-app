import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

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
