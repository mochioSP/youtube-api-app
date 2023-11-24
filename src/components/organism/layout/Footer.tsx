import { FC, memo } from "react";

import styled from "styled-components";

export const Footer: FC = memo(() => {
  return (
    <>
      <SFooter>
      </SFooter>
    </>
  );
});

const SFooter = styled.footer`
  width: 100%;
  height: 80px;
  background-color: #91c8e4;
`
