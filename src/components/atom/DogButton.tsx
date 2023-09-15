import { FC, ReactNode, memo } from "react";

import "../../style/DogButton.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const DogChoiceButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;

  return (
    <button className="dog-button" onClick={onClick}>
      {children}
    </button>
  );
});
