import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    <div style={{ height: "65px", backgroundColor: "#A1CCD1" }}>
      <h1 style={{ color: "gray", margin: 0 }}>癒されアプリ</h1>
    </div>
  );
});
