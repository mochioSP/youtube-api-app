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
    <div className="Search" style={{ textAlign: "center" }}>
      <input
        placeholder="自分にとっての癒しを入力"
        type="text"
        value={searchWord}
        onChange={onChangeSearchWord}
        className="searchInput"
        style={{ width: "700px", height: "50px", borderRadius: "5px" }}
      />
      <button
        disabled={searchWord === ""}
        onClick={onClickGetUrl}
        className="searchButton"
        style={{ width: "100px", height: "55px" }}
      >
        検索
      </button>
    </div>
  );
});
