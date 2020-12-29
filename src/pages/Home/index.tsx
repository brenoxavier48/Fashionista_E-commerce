import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../store/Products/products.selectors'
import Header from '../../components/Header'



const Home = () => {

  
  return (
    <div className="home-container">
      <Header></Header>

    </div>
  )
}