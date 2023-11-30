import React from "react";
import { useDeckContext } from "../context/DeckContext";

const CardDisplay: React.FC = () => {
  const { actualCard, previousCard, loading } = useDeckContext();

  let message = "";
  if (actualCard?.cards[0] && previousCard?.cards[0]) {
    if (actualCard.cards[0].value === previousCard.cards[0].value) {
      message = "SNAP VALUE!";
    } else if (actualCard.cards[0].suit === previousCard.cards[0].suit) {
      message = "SNAP SUIT!";
    }
  }

  return (
    <div className="card-display">
      <div className="card-container">
        <img
          className="card"
          src={
            previousCard?.cards[0]?.image ||
            "https://deckofcardsapi.com/static/img/back.png"
          }
          alt="Previous Card"
        />
      </div>
      <div className="card-container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <img
            className="card"
            src={
              actualCard?.cards[0]?.image ||
              "https://deckofcardsapi.com/static/img/back.png"
            }
            alt="Actual Card"
          />
        )}
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default CardDisplay;
