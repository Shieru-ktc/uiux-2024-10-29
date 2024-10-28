import React, { createContext, useContext, useState, ReactNode } from "react";

interface TitleTextContextProps {
  titleText: string;
  setTitleText: (text: string) => void;
}

const TitleTextContext = createContext<TitleTextContextProps | undefined>(
  undefined
);

export const TitleTextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [titleText, setTitleText] = useState<string>("");

  return (
    <TitleTextContext.Provider value={{ titleText, setTitleText }}>
      {children}
    </TitleTextContext.Provider>
  );
};

export const useTitleText = (): TitleTextContextProps => {
  const context = useContext(TitleTextContext);
  if (!context) {
    throw new Error("useTitleText must be used within a TitleTextProvider");
  }
  return context;
};
