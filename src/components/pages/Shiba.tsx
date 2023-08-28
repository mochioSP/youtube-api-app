import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";

import { VideoCard } from "../organism/user/VideoCard";
import { useShibaVideo } from "../hooks/useShibaVideo";

export const Shiba: FC = memo(() => {
  const { getShibaVideo, videos } = useShibaVideo();

  useEffect(() => getShibaVideo(), []);

  return (
    <>
      <p>柴犬動画</p>
      <div>
        シベリアンハスキーは<Link to={`/siberianhusky/`}>こちら</Link>
      </div>
      <div>
        トイプードルは<Link to={`/ToyPoodle/`}>こちら</Link>
      </div>
      {videos.map((item) => (
        <VideoCard item={item} />
      ))}
    </>
  );
});
