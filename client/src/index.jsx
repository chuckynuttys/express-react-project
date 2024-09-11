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
export default class App extends Component {
  componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }

  render() {
    console.log('I was triggered during render')
    return ( 
      <div> I am the App component </div>
    )
  }
}