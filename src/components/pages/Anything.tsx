import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAnythingVideo } from "../../hooks/useAnythingVideo";
import { VideoCard } from "../organism/video/VideoCard";

export const Anything: FC = memo(() => {
  const { videos } = useAnythingVideo();
  console.log(videos);

  return (
    //anythingには検索ワードが入るようにする
    <>
      <p>anything動画</p>
      <div>
        柴犬は<Link to={`/`}>こちら</Link>
      </div>
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
