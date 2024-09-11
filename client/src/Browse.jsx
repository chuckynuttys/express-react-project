import './product.css'
import { useState } from 'react'

function Product() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <div id="productcontainer">
        <p>Item for sale</p>
        <img src="" alt="Pokemon Sprite" id="pokemonSprite" style={{display: "none"}}></img>
      </div>
  
     
    </>
  )
}

export default Product