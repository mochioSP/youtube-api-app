import { Outlet } from "react-router-dom";
import { Searcher } from "../molecules/Searcher";
import { Header } from "../organism/layout/Header";
import { SideBar } from "../organism/layout/SideBar";
import { Choices } from "../molecules/ChoicesDogButton";

import { FC } from "react";
import { Footer } from "../organism/layout/Footer";
import styled from "styled-components";

export const Layout:FC = () => {
  return (
    <>
      <Header />
      <SideBar />
        <SContainer>
          <Choices />
          <Searcher />
          <div style={{height: '600px'}}>
            <Outlet />
          </div>
        </SContainer>
      <Footer />
    </>
  );
};

const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

