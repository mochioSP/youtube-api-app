import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";

import { UserCard } from "../organism/user/UserCard";
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
        <UserCard item={item} />
      ))}
    </>
  );
});
