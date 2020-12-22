import React from "react";
import { CountButton, MainButton } from "./components/ui/buttons";

function App() {
  return (
    <div className="App">
      <div>
        <CountButton></CountButton>
        <CountButton decrease></CountButton>
        <MainButton label="Adicionar à Sacola"></MainButton>
      </div>
    </div>
  );
}

export default App;
