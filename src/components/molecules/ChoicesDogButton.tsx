import { useNavigate } from "react-router-dom";
import { DogChoiceButton } from "../atom/DogButton";

import "../../style/ChoicesDogButtons.css";

export const Choices = () => {
  const navigate = useNavigate();
  const onClickShibaVideo = () => navigate("/");
  const onClickHuskyVideo = () => navigate("/husky");
  const onClickToypooVideo = () => navigate("/poodle");

  return (
    <>
      <div className="choices-dog-buttons">
        <div className="shibaButton">
          <DogChoiceButton onClick={onClickShibaVideo}>
            しばいぬ
          </DogChoiceButton>
        </div>
        <div className="huskyButton">
          <DogChoiceButton onClick={onClickHuskyVideo}>
            はすきー
          </DogChoiceButton>
        </div>
        <div className="toypooButton">
          <DogChoiceButton onClick={onClickToypooVideo}>
            といぷー
          </DogChoiceButton>
        </div>
      </div>
    </>
  );
};
