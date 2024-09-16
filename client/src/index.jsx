import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import SearchBar from './SearchBar.jsx'
import NavBar from './navbar.jsx'
import Product123 from './Browse.jsx'
import Login from './Login.jsx'
import { useState } from 'react'
import './index.css'

const App = () => {
  //const to control if login should be displayed or not
  const [showLogin, setShowLogin] = useState(false);

  // State for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

    //show login component 
    const handleLoginClick = () => {
      setShowLogin(true);
    };
  
    const handleSuccessfulLogin = () => {
  
      //user has been authenticated
      setIsAuthenticated(true);
  
      //Hide login component
      setShowLogin(false);
  
    }

    useEffect(() => {
      const root = document.getElementById('root');
      const children = root.children;
      const loginPage = document.getElementById('loginPage');
  
      if (showLogin && !isAuthenticated) {
        for (let i = 0; i < children.length; i++) {
          if (children[i] !== loginPage) {
            children[i].classList.add('blurred');
          }
        }
      } else {
        for (let i = 0; i < children.length; i++) {
          children[i].classList.remove('blurred');
        }
      }
    }, [showLogin, isAuthenticated]);
  
    return (
      <>
        <Header />
        <SearchBar onLoginClick={handleLoginClick} />
        <NavBar />
        <Product123 />
  
        {showLogin && !isAuthenticated && (
          <div id="loginPage">
            <Login onSuccessfulLogin={handleSuccessfulLogin} />
          </div>
        )}
      </>
    );
  };



createRoot(document.getElementById('root')).render(

  <StrictMode>
  <App />
</StrictMode>
);
