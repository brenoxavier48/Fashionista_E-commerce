import React, { useState, MouseEvent, useEffect } from "react";
import { CountButton, MainButton, SizeButton, HeaderButton } from "./components/ui/buttons";
import { InputSearch } from "./components/ui/inputs";
import Counter from './components/Counter'
import Home from './pages/Home'
import { ProductService } from './services/Product'

function App() {
  
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
