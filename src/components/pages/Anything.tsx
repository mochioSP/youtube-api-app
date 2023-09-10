import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { useAnythingVideo } from "../../hooks/useAnythingVideo";
import { VideoCard } from "../organism/video/VideoCard";

export const Anything: FC = memo(() => {
  const { videos } = useAnythingVideo();
  console.log("Anything");
  console.log(videos);

  return (
    //anythingには検索ワードが入るようにする
    <>
      <p>anything動画</p>
      {videos.map((item) => (
        <VideoCard item={item} />
      ))}
    </>
  );
});
