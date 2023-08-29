import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";

import { VideoCard } from "../organism/user/VideoCard";
import { useToyPoodleVideo } from "../hooks/useToyPoodleVideo";

export const ToyPoodle: FC = memo(() => {
  const { getToyPoodleVideo, videos } = useToyPoodleVideo();

  useEffect(() => getToyPoodleVideo(), []);

  return (
    <>
      <p>トイプードル動画</p>
      <div>
        柴犬は<Link to={`/`}>こちら</Link>
      </div>
      <div>
        シベリアンハスキーは<Link to={`/siberianhusky/`}>こちら</Link>
      </div>
      {videos.map((item) => (
        <VideoCard item={item} />
      ))}
    </>
  );
});
