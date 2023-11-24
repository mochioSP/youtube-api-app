import { ChangeEvent, FC, memo, useContext } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { InputContext } from "../../provides/InputTextProvider";

type SearchButton = {
  disabled: boolean;
}

export const Searcher: FC = memo(() => {
  const navigate = useNavigate();
  const { searchWord, setSearchWord }: any = useContext(InputContext);

  const onChangeSearchWord = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchWord(e.target.value);

  const onClickGetAnythingPage = () => {
    navigate("/any");
  };

  return (
    <>
      <SSearcher>
        <SSearchInput
          className="Search-input"
          placeholder="すきな動物を入力"
          type="text"
          onChange={onChangeSearchWord}
          value={searchWord}
        />
        <SseachButton
          className="search-button"
          disabled={searchWord === ""}
          onClick={onClickGetAnythingPage}
        >
          検索
        </SseachButton>
      </SSearcher>
    </>
  );
});

const SSearcher = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const SSearchInput = styled.input`
  padding: 10px;
  width: 35%;
  height: 50px;
  border-radius: 5px;
  border: none;
`

const SseachButton = styled.button<SearchButton>`
  background: #d8d8d8;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`