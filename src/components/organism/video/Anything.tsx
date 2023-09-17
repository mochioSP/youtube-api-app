import { FC, memo, useContext, useEffect } from "react";

import { useAnythingVideo } from "../../../hooks/useAnythingVideo";
import { VideoCard } from "../../molecules/VideoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { InputContext } from "../../../provides/InputTextProvider";

export const Anything: FC = memo(() => {
  const { searchWord }: any = useContext(InputContext);
  const { getAnythingVideo, videos } = useAnythingVideo();
  useEffect(() => getAnythingVideo(searchWord), []);
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
        {videos.map((video) => (
          <SwiperSlide>
            <VideoCard video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
