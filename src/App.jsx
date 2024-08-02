import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import "./App.css"
import RecipeDetail from "./components/RecipeDetail"
import data from "./recipes.json"
import Footer from './components/Footer'
const App = () => { 
  let [recipes, setRecipes] = useState([])
  useEffect(() => {
    setRecipes(data)
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home recipes={recipes} />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipe/:id' element={<RecipeDetail recipes={recipes} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
