import { ChangeEvent, FC, memo, useState } from "react";
import { useAnythingVideo } from "../../hooks/useAnythingVideo";

import "../../style/Searcher.css";

export const Searcher: FC = memo(() => {
  console.log("Search");

  const [searchWord, setSearchWord] = useState("");

  const onChangeSearchWord = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchWord(e.target.value);

  const { getAnythingVideo, videos } = useAnythingVideo();

  const onClickGetUrl = () => {
    getAnythingVideo(searchWord);
  };

  return (
    <>
      <div className="searcher">
        <input
          className="Search-input"
          placeholder="自分にとっての癒しを入力"
          type="text"
          value={searchWord}
          onChange={onChangeSearchWord}
        />
        <button
          className="search-button"
          disabled={searchWord === ""}
          onClick={onClickGetUrl}
        >
          検索
        </button>
      </div>
    </>
  );
});
