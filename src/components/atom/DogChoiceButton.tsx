import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const DogChoiceButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;

  return (
    <>
      <div>
        <button onClick={onClick}>{children}</button>
      </div>
    </>
  );
});
