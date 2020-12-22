import React from "react";
import { CountButton, MainButton, SizeButton, HeaderButton } from "./components/ui/buttons";

function App() {
  return (
    <div className="App">
      <div>
        <CountButton></CountButton>
        <CountButton decrease></CountButton>
        <MainButton label="Adicionar à Sacola"></MainButton>
        <div style={{width:"290px", padding:"10px"}}>
          <MainButton label="Adicionar à Sacola"></MainButton>
        </div>
        <SizeButton size="PP" available selected></SizeButton>
        <SizeButton size="P" available={false} selected></SizeButton>
        <SizeButton size="M" available></SizeButton>
        <SizeButton size="G" available></SizeButton>
        <SizeButton size="G" available={false}></SizeButton>
        <HeaderButton icon="search"></HeaderButton>
        <HeaderButton icon="shoppingCart"></HeaderButton>
        <HeaderButton icon="shoppingCart" itemsQuantity={2}></HeaderButton>
      </div>
    </div>
  );
}

export default App;
