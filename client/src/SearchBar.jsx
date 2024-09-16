import './SearchBar.css'
import magglass from './assets/magglass.png'
import { useState } from 'react'

//import { fetchpoke } from './fetch.js'

const SearchBar = ({ onLoginClick }) => {
  const [count, setCount] = useState(0)

  return (
    <>

      <div id="searchbarbanner">
        <div id="searchbar">
          <div id="searchbarbg">
            {/* <p id ="searchbarp">Type to search</p> */}
            <input type="test" id="searchbarinput" placeholder='Product Search'></input>

          </div>
          <div id="imagecontainer">
            {/* <div onClick={fetchpoke}  id="imagecontainer"> */}
            <img id="searchimage" src={magglass} />
          </div>
        </div>
        <div className='searchBarItem'>
            <button className='searchBarItemText' onClick={onLoginClick}>Login</button>
          </div>
      </div>


    </>
  )
}

export default SearchBar