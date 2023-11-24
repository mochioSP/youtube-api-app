import { FC, memo } from "react";

import Logo from '../../../images/logo.png'
import styled from "styled-components";

export const Header: FC = memo(() => {
  return (
    <>
      <SHeader>
        <Simg src={Logo} alt="犬のシルエットロゴ" />
      </SHeader>
    </>
  );
});

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: #91c8e4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Simg = styled.img`
  width: 70px;
  opacity: 0.8;
  position: absolute;
  left: auto;
`
