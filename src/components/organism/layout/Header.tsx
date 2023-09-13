import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    <div style={{ height: "70px", backgroundColor: "#4682A9" }}>
      <h1 style={{ color: "#F6F4EB", margin: 0 }}>いぬとかアプリ</h1>
    </div>
  );
});
