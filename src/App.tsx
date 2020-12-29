import React, { useState, MouseEvent, useEffect } from "react";
import { CountButton, MainButton, SizeButton, HeaderButton } from "./components/ui/buttons";
import { InputSearch } from "./components/ui/inputs";
import Counter from './components/Counter'
import Header from './components/Header'
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
      <Header/>
    </div>
  );
}

export default App;
