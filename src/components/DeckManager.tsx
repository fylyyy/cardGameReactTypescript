import React, { useEffect } from "react";
import { useDeckContext } from "../context/DeckContext";
import CardDisplay from "./CardDisplay";
import DrawButton from "./DrawButton";
import { initializeDeck } from "../services/DeckApi";

const DeckManager: React.FC = () => {
  const { setDeckInfo } = useDeckContext();

  useEffect(() => {
    const setupDeck = async () => {
      const deck = await initializeDeck();
      setDeckInfo(deck);
    };

    setupDeck();
  }, [setDeckInfo]);

  return (
    <div className="deck-manager">
      <CardDisplay />
      <DrawButton />
    </div>
  );
};

export default DeckManager;
