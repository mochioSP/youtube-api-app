import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import '../../../../src/style/swiper.css'

// import required modules
import { Pagination, Mousewheel } from "swiper/modules";

import { VideoCard } from "../../molecules/VideoCard";
import { useShibaVideo } from "../../../../src/hooks/useShibaVideo";

export const Shiba: FC = memo(() => {
  const { getShibaVideo, videos } = useShibaVideo();
  useEffect(() => getShibaVideo(), [getShibaVideo]);

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
