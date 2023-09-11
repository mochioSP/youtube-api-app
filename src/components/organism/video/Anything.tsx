import { FC, memo } from "react";

import { useAnythingVideo } from "../../../hooks/useAnythingVideo";
import { VideoCard } from "../../molecules/VideoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export const Anything: FC = memo(() => {
  const { videos } = useAnythingVideo();
  console.log("Anything");
  console.log(videos);

  return (
    //anythingには検索ワードが入るようにする
    <>
      <p>anything動画</p>
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
