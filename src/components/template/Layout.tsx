import { Outlet, useNavigate } from "react-router-dom";
import { Search } from "../atom/search/Search";
import { Header } from "../organism/layout/Header";
import { MenuDrawer } from "../organism/layout/MenuDrawer";
import { DogChoiceButton } from "../atom/DogChoiceButton";

export const Layout = () => {
  const navigate = useNavigate();
  const onClickHuskyVideo = () => navigate("/husky");

  return (
    <>
      <div className="container" style={{ width: "100%" }}>
        <Header />
        <div className="body" style={{ display: "flex" }}>
          <div className="sideBar" style={{ width: "10vw" }}>
            <MenuDrawer />
          </div>
          <div
            className="videoArea"
            style={{ width: "90vw", marginTop: "30px" }}
          >
            <Search />
            <div
              className="huskyButton"
              style={{ textAlign: "center", marginTop: "45px" }}
            >
              <DogChoiceButton onClick={onClickHuskyVideo}>
                はすきー
              </DogChoiceButton>
            </div>
            <div className="video">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
