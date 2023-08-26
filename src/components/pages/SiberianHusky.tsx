import { FC, memo } from "react";
import { Link } from "react-router-dom";

export const SiberianHusky: FC = memo(() => {
  return (
    <>
      <p>シベリアンハスキー動画</p>
      <div>
        柴犬は<Link to={`/`}>こちら</Link>
      </div>
      <div>
        トイプードルは<Link to={`/toypoodle/`}>こちら</Link>
      </div>
    </>
  );
});
