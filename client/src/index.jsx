import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import SearchBar from './SearchBar.jsx'
import NavBar from './navbar.jsx'
import Product123 from './product.jsx'
import './index.css'
//import { fetchpoke } from './fetch.js'

//fetchData();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <SearchBar />
    <NavBar />
    <Product123 />

  </StrictMode>,
)
//test