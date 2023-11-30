import React, { createContext, useContext, useState } from "react";
import { DeckResponse, DrawResponse } from "../services/DeckApi";

interface DeckContextProps {
  deckInfo: DeckResponse | null;
  actualCard: DrawResponse | null;
  previousCard: DrawResponse | null;
  loading: boolean;
  setDeckInfo: (info: DeckResponse) => void;
  setActualCard: (card: DrawResponse) => void;
  setPreviousCard: (card: DrawResponse) => void;
  setLoading: (loading: boolean) => void;
  valueMatches: number;
  suitMatches: number;
  setValueMatches: React.Dispatch<React.SetStateAction<number>>;
  setSuitMatches: React.Dispatch<React.SetStateAction<number>>;
}

const DeckContext = createContext<DeckContextProps | null>(null);

export const useDeckContext = () => {
  const context = useContext(DeckContext);
  if (!context) {
    throw new Error("useDeckContext must be used within a DeckProvider");
  }
  return context;
};

export const DeckProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deckInfo, setDeckInfo] = useState<DeckResponse | null>(null);
  const [actualCard, setActualCard] = useState<DrawResponse | null>(null);
  const [previousCard, setPreviousCard] = useState<DrawResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [valueMatches, setValueMatches] = useState<number>(0);
  const [suitMatches, setSuitMatches] = useState<number>(0);

  return (
    <DeckContext.Provider
      value={{
        deckInfo,
        actualCard,
        previousCard,
        loading,
        setDeckInfo,
        setActualCard,
        setPreviousCard,
        setLoading,
        valueMatches,
        suitMatches,
        setValueMatches,
        setSuitMatches,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
