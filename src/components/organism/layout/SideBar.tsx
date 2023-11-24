import { FC, memo, useState } from "react";
import { SidebarMenu } from "./SidebarMenu";
import styled from "styled-components";

export type SidebarProps = {
  open: boolean
}

export const SideBar: FC = memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <SSidebarContainer open={isOpen}>
      <SSidebarInner>
        <SSidebarHeader>
          <SBurger
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "Menu" : "Close"}
            </span>
          </SBurger>
        </SSidebarHeader>
        <SidebarMenu open={isOpen} />
      </SSidebarInner>
    </SSidebarContainer>
  );
});

const SSidebarContainer = styled.aside<SidebarProps>`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: ${(props) => (props.open ? '60px' : '260px')};
  height: 100%;
  background: #91c8e4;
  transition: width 0.4s;
`

const SSidebarInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 260px;
  height: auto;
`

const SSidebarHeader = styled.header`
    display: flex;
  align-items: center;
  height: 80px;
  background: rgb(0 0 0 / 15%);
`

const SBurger = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  /* ------------ */
  width: 60px;
  height: 70px;
  display: grid;
  place-items: center;
  color: #f9f9f9;
`