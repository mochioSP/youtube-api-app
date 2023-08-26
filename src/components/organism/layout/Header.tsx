import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    <div style={{ height: "65px", backgroundColor: "#A1CCD1" }}>
      <h1 style={{ color: "gray" }}>一休みするためのアプリ</h1>
    </div>
  );
});
