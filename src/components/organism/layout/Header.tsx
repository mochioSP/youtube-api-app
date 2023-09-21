import { FC, memo } from "react";

import "../../../style/Header.css";

export const Header: FC = memo(() => {
  return (
    <>
      <header>
        <div className="app-title">
          <p>いやされるアプリ</p>
        </div>
      </header>
    </>
  );
});
