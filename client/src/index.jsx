import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import SearchBar from './SearchBar.jsx'
import NavBar from './navbar.jsx'
import Product123 from './Browse.jsx'
import Login from './Login.jsx'
import './index.css'
//import { fetchpoke } from './fetch.js'

//fetchData();



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Header />
    <SearchBar />
    <NavBar />
    <Product123/>
    <Login />
  </StrictMode>,
)

const root = document.getElementById('root');
const children = root.children;
const loginPage = document.getElementById('loginPage');

for (let i = 0; i < children.length; i++) {
  if (children[i] !== loginPage) {
    children[i].classList.add('blurred'); // Add blur to other elements
  }
}

//test