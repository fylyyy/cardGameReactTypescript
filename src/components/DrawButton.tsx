import React from "react";
import { useDeckContext } from "../context/DeckContext";
import { drawCard } from "../services/DeckApi";

const DrawButton: React.FC = () => {
  const {
    deckInfo,
    setDeckInfo,
    setActualCard,
    setPreviousCard,
    setLoading,
    loading,
    actualCard,
    setValueMatches,
    setSuitMatches,
    valueMatches,
    suitMatches,
  } = useDeckContext();

  const handleDraw = async () => {
    if (deckInfo && deckInfo.remaining > 0) {
      setLoading(true);
      const newCard = await drawCard(deckInfo.deck_id);

      if (newCard.remaining === 0) {
        setLoading(false);
        setDeckInfo({ ...deckInfo, remaining: 0 });
        alert(
          `Deck finished. Value Matches: ${valueMatches}, Suit Matches: ${suitMatches}`
        );
        return;
      }

      if (actualCard) {
        setPreviousCard(actualCard);
        setActualCard(newCard);

        if (newCard.cards[0].value === actualCard.cards[0].value) {
          setValueMatches(valueMatches + 1);
        }
        if (newCard.cards[0].suit === actualCard.cards[0].suit) {
          setSuitMatches(suitMatches + 1);
        }
      }

      setLoading(false);
    }
  };

  return (
    <button
      className="draw-button"
      disabled={loading || deckInfo?.remaining === 0}
      onClick={handleDraw}
    >
      Draw Card
    </button>
  );
};

export default DrawButton;
