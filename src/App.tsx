import React, { useState, MouseEvent, useEffect } from "react";
import { CountButton, MainButton, SizeButton, HeaderButton } from "./components/ui/buttons";
import { InputSearch } from "./components/ui/inputs";
import Counter from './components/Counter'
import { ProductService } from './services/Product'

function App() {
  const [ value, setValue ] = useState<number>(0)

  useEffect( () => {
    const productService = new ProductService()

    productService.getCatolog().then((response) => {
      console.log(response)
    })
    
  },[])
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
        <HeaderButton icon="shoppingCart" itemsQuantity={233}></HeaderButton>
        <InputSearch></InputSearch>
        <div style={{width:"290px", padding:"10px"}}>
          <InputSearch></InputSearch>
        </div>
        <Counter
          value={value}
          decrease={(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
            setValue(currentValue => currentValue - 1)
          }}
          increase={(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
            setValue(currentValue => currentValue + 1)
          }}
        ></Counter>
      </div>
    </div>
  );
}

export default App;
