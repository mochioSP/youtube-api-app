import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Shiba } from "../components/pages/Shiba";
import { SiberianHusky } from "../components/pages/SiberianHusky";
import { ToyPoodle } from "../components/pages/ToyPoodle";
import { Anything } from "../components/pages/Anything";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path={"/"} element={<Shiba />} />
      {/* <Route path={"/siberianhusky/"} element={<SiberianHusky />} />
      <Route path={"/toypoodle/"} element={<ToyPoodle />} /> */}
      <Route path={"/Anything/"} element={<Anything />} />
    </Routes>
  );
});
