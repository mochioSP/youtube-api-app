import { Outlet } from "react-router-dom";
import { Searcher } from "../molecules/Searcher";
import { Header } from "../organism/layout/Header";
import { SideBar } from "../organism/layout/SideBar";
import { Choices } from "../molecules/ChoicesDogButton";

export const Layout = () => {
  return (
    <>
      <div className="youtube-container">
        <Header />
        <SideBar />
        <div className="main">
          <Searcher />
          <Choices />
          <div className="video-Area">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
