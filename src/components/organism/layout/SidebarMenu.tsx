import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FC, memo } from "react";

type isOpen = {
  open: boolean
}

const nav = ["Home", "Settings", "Contacts"];
export const SidebarMenu: FC<isOpen>= memo((props) => {
  const { open } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/settings");
  };

  return nav.map((item) => (
    <nav key={item}>
      <SSidebarBtton onClick={onClick} open={open} >
        <SSpan className="material-symbols-outlined">{item}</SSpan>
        <SButtonText>{item}</SButtonText>
      </SSidebarBtton>
    </nav>
  ));
});

const SSpan = styled.span`
  margin-left: 7px;
  opacity: 0.8;
`
const SButtonText = styled.p`
  font-size: 27px;
  margin-left: 30px;
  transition: 0.3s;
`

const SSidebarBtton = styled.button<isOpen>`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  /* ------------ */
  display: flex;
  gap: 16px;
  align-items: center;
  height: 55px;
  width: 100%;
  font-family: "poppins";
  font-size: 16px;
  text-transform: capitalize;
  line-height: 1;
  padding: 0 10px;
  color: #f9f9f9;
  opacity: 0.8;
    &:hover {
      opacity: 1;
      background: rgb(0 0 0 / 30%);
      ${SSpan} {
          opacity: 1;
      }
    }
      ${SButtonText} {
        opacity: ${(props) => (props.open ? "0" : "1")};
      }
`

