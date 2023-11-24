import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { DogChoiceButton } from "../atom/DogButton";
import { FC, memo } from "react";

export const Choices: FC = memo(() => {
  const navigate = useNavigate();
  const onClickShibaVideo = () => navigate("/");
  const onClickHuskyVideo = () => navigate("/husky");
  const onClickToypooVideo = () => navigate("/poodle");

  const dogBttonData = [
    {children: 'しばいぬ', onClick: onClickShibaVideo},
    {children: 'はすきー', onClick: onClickHuskyVideo},
    {children: 'といぷー', onClick: onClickToypooVideo}
  ]

  return (
    <>
      <ButtonsContainer>
        {dogBttonData.map((dog, index)=> (
            <DogChoiceButton key={index} children={dog.children} onClick={dog.onClick} />
        ))}
      </ButtonsContainer>
    </>
  );
});

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`