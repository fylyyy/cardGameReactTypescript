import React from "react";
import { DeckProvider } from "./context/DeckContext";
import DeckManager from "./components/DeckManager"; // New component for managing deck
import "./styles.css";

const App: React.FC = () => {
  return (
    <DeckProvider>
      <DeckManager />
    </DeckProvider>
  );
};

export default App;
