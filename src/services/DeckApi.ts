import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

// Interface for the response from the API
export interface DeckResponse {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

export interface DrawResponse {
  success: boolean;
  deck_id: string;
  cards: Card[];
  remaining: number;
}

export interface Card {
  code: string;
  image: string;
  value: string;
  suit: string;
}

// Function to initialize and shuffle a new deck
export const initializeDeck = async (): Promise<DeckResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
    return response.data;
  } catch (error) {
    throw new Error("Error initializing deck");
  }
};

// Function to draw a card from the deck
export const drawCard = async (
  deckId: string,
  count = 1
): Promise<DrawResponse> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${deckId}/draw/?count=${count}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error drawing a card");
  }
};

// Function to reshuffle the deck
export const reshuffleDeck = async (deckId: string): Promise<DeckResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/${deckId}/shuffle/`);
    return response.data;
  } catch (error) {
    throw new Error("Error reshuffling the deck");
  }
};
