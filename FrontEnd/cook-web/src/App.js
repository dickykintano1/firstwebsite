import React from 'react';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import About from './components/pages/About';
import SearchResult from './components/pages/SearchResult';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateRecipe from './components/pages/CreateRecipe';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './components/css/App.css'
// import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    // <ChakraProvider>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/about" element={<About/>}>About</Route>
            <Route path="/login" element={<Login/>}>Login</Route>
            <Route path="/users/reg" element={<Register/>}>Register</Route>
            <Route path="/users/create-recipe" element={<CreateRecipe/>}>Login</Route>
            <Route path="/search" element={<SearchResult/>}>Search Result</Route> 
          </Routes>
          <Footer/>
        </div>
      </Router>
    // </ChakraProvider>
  )
}

export default App;