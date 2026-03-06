
import React from "react";
import './../styles/App.css';
import { Link } from "react-router-dom";
import Navigation from './Navigation.jsx'

const App = () => {
  return (
    <div>
      <ul>
     <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      </ul>
     
        
        
        <Navigation/>
    </div>
  )
}

export default App
