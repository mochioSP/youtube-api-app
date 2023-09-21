import { Outlet } from "react-router-dom";
import { Searcher } from "../molecules/Searcher";
import { Header } from "../organism/layout/Header";
import { SideBar } from "../organism/layout/SideBar";
import { Choices } from "../molecules/ChoicesDogButton";

import "../../style/Layout.css";

export const Layout = () => {
  return (
    <>
      <div className="youtube-container">
        <Header />
        <div className="main">
          <div className="Sidebar">
            <SideBar />
          </div>
          <div className="Search-and-video">
            <div>
              <Searcher />
              <Choices />
            </div>
            <div className="video-Area">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
