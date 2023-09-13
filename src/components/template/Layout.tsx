import { Outlet, useNavigate } from "react-router-dom";
import { Search } from "../atom/search/Search";
import { Header } from "../organism/layout/Header";
import { SideBar } from "../organism/layout/SideBar";
import { DogChoiceButton } from "../atom/DogChoiceButton";

export const Layout = () => {
  const navigate = useNavigate();
  const onClickHuskyVideo = () => navigate("/husky");

  return (
    <>
      <div className="youtube-container">
        <Header />
        <SideBar />
        <div className="main">
          <Search />
          <div
            className="huskyButton"
            style={{ textAlign: "center", marginTop: "45px" }}
          >
            <DogChoiceButton onClick={onClickHuskyVideo}>
              はすきー
            </DogChoiceButton>
          </div>
          <div className="video-Area">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
