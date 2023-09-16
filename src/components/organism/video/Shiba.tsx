import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { VideoCard } from "../../molecules/VideoCard";
import { useShibaVideo } from "../../../../src/hooks/useShibaVideo";
import { useQuery } from "@tanstack/react-query";
import { Videos } from "../../type/api/Videos";
import axios from "axios";

const fetchShibaVideos = async () => {
  const result = await axios.get<Videos[]>(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=%E6%9F%B4%E7%8A%AC&relevanceLanguage=ja&type=video&key=${process.env.REACT_APP_API_KEY}`
  );
  return result.data;
};

export const Shiba: FC = memo(() => {
  // const { getShibaVideo, videos } = useShibaVideo();
  // useEffect(() => getShibaVideo(), [getShibaVideo]);
  const { isLoading, error, data } = useQuery<Videos[]>([""], fetchShibaVideos);

  if (error) return <p>エラーです</p>;
  if (isLoading) return <p>ローディング中</p>;

  return (
    <>
      <p style={{ textAlign: "center" }}>柴犬動画</p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {data?.map((ShibaVideo) => (
          <SwiperSlide>
            <VideoCard ShibaVideo={ShibaVideo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
