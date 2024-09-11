import { useState } from 'react'
import './Header.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <div id="headerbanner">
        
        <div className='wrapper'>
          <p className="topbannerp">Buy Bay Rewards Program</p>
          </div>
          <div className='wrapper'>
            <p className="topbannerp" >|</p>
            </div>
          <div className='wrapper'>
          <p className="topbannerp">Sign up and save %50</p>
          </div>
      </div>
  
     
    </>
  )
}

export default App
