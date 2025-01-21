import './Navbar.css'
import logo from '../../assets/new.png'
import arrow from '../../assets/arrow.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'


const Navbar = () => {

const {setCurrency} = useContext(CoinContext);

const currencyHandler = (event)=>{
  switch(event.target.value){
    case "usd":
      setCurrency({
        name: "usd",
        symbol: "$",
      });
      break;
    case "eur":
      setCurrency({
        name: "eur",
        symbol: "€",
        
      });
      break;
    case "inr":
      setCurrency({
        name: "inr",
        symbol: "₹",
        
      });
      break;
    default:
      setCurrency({
        name: "usd",
        symbol: "$",
        
      });
  }
}


  return (
    <div className='navbar'>
      <Link to={'/'}>
     <div className="logo-container">
    <img src={logo} alt="Logo" />
    <span className="logo-text">Cryptoplace</span>
  </div></Link>
      <ul>
      <Link to={'/'}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign Up <img src={arrow} alt="" width="10px" height="10px" /></button>
      </div>
      </div>

  )
}

export default Navbar
