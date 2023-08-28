import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Shiba } from "../pages/Shiba";
import { SiberianHusky } from "../pages/SiberianHusky";
import { ToyPoodle } from "../pages/ToyPoodle";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path={"/"} element={<Shiba />} />
      {/* <Route path={"/siberianhusky/"} element={<SiberianHusky />} /> */}
      {/* <Route path={"/toypoodle/"} element={<ToyPoodle />} /> */}
    </Routes>
  );
});
