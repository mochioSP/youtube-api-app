import { FC, memo } from "react";
import { Link } from "react-router-dom";

export const ToyPoodle: FC = memo(() => {
  return (
    <>
      <p>トイプードル動画</p>
      <div>
        柴犬は<Link to={`/`}>こちら</Link>
      </div>
      <div>
        シベリアンハスキーは<Link to={`/siberianhusky/`}>こちら</Link>
      </div>
    </>
  );
});
