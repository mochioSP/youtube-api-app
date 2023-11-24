import { FC, memo, useContext, useEffect } from "react";

import { useAnythingVideo } from "../../../hooks/useAnythingVideo";
import { VideoCard } from "../../molecules/VideoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { InputContext } from "../../../provides/InputTextProvider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

export const Anything: FC = memo(() => {
  const { searchWord }: any = useContext(InputContext);
  const { getAnythingVideo, videos } = useAnythingVideo();

  useEffect(() => getAnythingVideo(searchWord), []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{searchWord}動画</h1>
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
