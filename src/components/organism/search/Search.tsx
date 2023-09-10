import { ChangeEvent, FC, memo, useState } from "react";
import { useAnythingVideo } from "../../../hooks/useAnythingVideo";

export const Search: FC = memo(() => {
  console.log("Search");

  const [searchWord, setSearchWord] = useState("");

  const onChangeSearchWord = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchWord(e.target.value);

  const { getAnythingVideo, videos } = useAnythingVideo();

  const onClickGetUrl = () => {
    getAnythingVideo(searchWord);
  };

  return (
    <div className="Search">
      <input
        placeholder="ここに入力"
        type="text"
        value={searchWord}
        onChange={onChangeSearchWord}
        className="searchInput"
      />
      <button
        disabled={searchWord === ""}
        onClick={onClickGetUrl}
        className="searchButton"
      >
        検索
      </button>
    </div>
  );
});
