import { FC, ReactNode, memo } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const DogChoiceButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;

  return (
    <DogButton onClick={onClick}>
      {children}
    </DogButton>
  );
});

const DogButton = styled.button`
  display: block;
	text-align: center;
	text-decoration: none;
	position: relative;
	width: 100px;
  height: 60px;
	margin:  0 5px;
	font-weight: bold;
	border-radius: 10px;
	color: #5c5c5c;
	border: 3px solid #d8d8d8;
	box-shadow: 5px 5px #9a8e8e;
	transition: 0.2s ease-in-out;
  cursor: pointer;

    &:hover {
    box-shadow: none;
    transform: translate(5px, 5px);
    }
`
