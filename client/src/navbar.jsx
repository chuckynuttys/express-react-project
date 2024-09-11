import './navbar.css'
import { useState } from 'react'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <div id="navbarbanner">
       <p className='topnavp'>Electronics</p>
       <p className='topnavp'>Collectibles</p>
       <p className='topnavp'>Home & Garden</p>
       <p className='topnavp'>Fashion</p>
       <p className='topnavp'>Toys</p>
       <p className='topnavp'>Sporting Goods</p>
       <p className='topnavp'>Business & Industrial</p>
       <p className='topnavp'>Jewelry & Watches</p>
      </div>
  
     
    </>
  )
}

export default Navbar
