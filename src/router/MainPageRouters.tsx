import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/template/Layout";
import { Shiba } from "../components/organism/video/Shiba";
import { SiberianHusky } from "../components/organism/video/SiberianHusky";
import { ToyPoodle } from "../components/organism/video/ToyPoodle";
import { Anything } from "../components/organism/video/Anything";
import { FC } from "react";

export const MainPageRouters: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shiba />} />
          <Route path="/husky" element={<SiberianHusky />} />
          <Route path="/poodle" element={<ToyPoodle />} />
          <Route path="/any" element={<Anything />} />
        </Route>
      </Routes>
    </>
  );
};
