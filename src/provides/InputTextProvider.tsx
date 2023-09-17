import { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const InputContext = createContext({});

export const InputTextProvider = (props: Props) => {
  const { children } = props;

  const [searchWord, setSearchWord] = useState("");

  return (
    <InputContext.Provider value={{ searchWord, setSearchWord }}>
      {children}
    </InputContext.Provider>
  );
};
