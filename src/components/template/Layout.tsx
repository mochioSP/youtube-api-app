import { Outlet, useNavigate } from "react-router-dom";
import { Search } from "../atom/search/Search";
import { Header } from "../organism/layout/Header";
import { SideBar } from "../organism/layout/SideBar";
import { DogChoiceButton } from "../atom/DogChoiceButton";

export const Layout = () => {
  const navigate = useNavigate();
  const onClickShibaVideo = () => navigate("/");
  const onClickHuskyVideo = () => navigate("/husky");
  const onClickToypooVideo = () => navigate("/poodle");

  return (
    <>
      <div className="youtube-container">
        <Header />
        <SideBar />
        <div className="main">
          <Search />
          <div className="shibaButton" style={{ marginLeft: "60px" }}>
            <DogChoiceButton onClick={onClickShibaVideo}>
              しばいぬ
            </DogChoiceButton>
          </div>
          <div className="huskyButton" style={{ marginLeft: "60px" }}>
            <DogChoiceButton onClick={onClickHuskyVideo}>
              はすきー
            </DogChoiceButton>
          </div>
          <div className="toypooButton" style={{ marginLeft: "60px" }}>
            <DogChoiceButton onClick={onClickToypooVideo}>
              といぷー
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
