import { ChangeEvent, FC, memo, useContext, useState } from "react";

import "../../style/Searcher.css";
import { useNavigate } from "react-router-dom";
import { InputContext } from "../../provides/InputTextProvider";

export const Searcher: FC = memo(() => {
  const navigate = useNavigate();
  const { searchWord, setSearchWord }: any = useContext(InputContext);
  // const [searchWord, setSearchWord] = useState("");

  const onChangeSearchWord = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchWord(e.target.value);

  const onClickGetAnythingPage = () => {
    navigate("/any");
  };

  return (
    <>
      <div className="searcher">
        <input
          className="Search-input"
          placeholder="すきな動物を入力"
          type="text"
          onChange={onChangeSearchWord}
          value={searchWord}
        />
        <button
          className="search-button"
          disabled={searchWord === ""}
          onClick={onClickGetAnythingPage}
        >
          検索
        </button>
      </div>
    </>
  );
});
