import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";

import { VideoCard } from "../organism/video/VideoCard";
import { useSiberianHuskyVideo } from "../hooks/useSiberianHuskyVideo";

export const SiberianHusky: FC = memo(() => {
  const { getSiberianHuskyVideo, videos } = useSiberianHuskyVideo();

  useEffect(() => getSiberianHuskyVideo(), []);

  return (
    <>
      <p>シベリアンハスキー動画</p>
      <div>
        柴犬は<Link to={`/`}>こちら</Link>
      </div>
      <div>
        トイプードルは<Link to={`/toypoodle/`}>こちら</Link>
      </div>
      {videos.map((item) => (
        <VideoCard item={item} />
      ))}
    </>
  );
});
