import './SearchBar.css'
import magglass from './assets/magglass.png'
import { useState } from 'react'

//import { fetchpoke } from './fetch.js'

function SearchBar() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <div id="searchbarbanner">
        <div id="searchbar">
       <div id="searchbarbg">
        {/* <p id ="searchbarp">Type to search</p> */}
        <input type = "test" id="searchbarinput" placeholder='Enter Pokemon name'></input>
        
       </div>
       <div>
       {/* <div onClick={fetchpoke}  id="imagecontainer"> */}
       <img id ="searchimage" src={magglass} />
       </div>
       </div>
      </div>
  
     
    </>
  )
}

export default SearchBar