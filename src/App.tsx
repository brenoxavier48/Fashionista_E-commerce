import React, { useState, MouseEvent, useEffect } from "react";
import { CountButton, MainButton, SizeButton, HeaderButton } from "./components/ui/buttons";
import { InputSearch } from "./components/ui/inputs";
import ProductCard from "./components/ProductCard";
import Counter from './components/Counter'
import Home from './pages/Home'
import { ProductService } from './services/Product'
import { Product } from './domain/ProductModel'

function App() {

  const [ value, setValue ] = useState<Product[] | any>([])

  useEffect( () => {
    const productService = new ProductService()

    productService.getCatolog().then((response) => {
      console.log(response)
      setValue(response)
    })
    
  },[])
  
  return (
    <div className="App">
      <Home/>
      <div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      {
        value.length > 0 && <><ProductCard product={value[0]}></ProductCard><ProductCard product={value[4]}></ProductCard><ProductCard product={value[14]}></ProductCard></>
      }
      
    </div>
  );
}

export default App;
