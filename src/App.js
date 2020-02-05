import React from 'react';
import './App.css';
import Routes from './Routes';
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: 54,
        width: "100%",
        background: "linear-gradient(to top right, orange, red)"
      }}>
        <NavLink style={{ color: "white", textDecoration: "none" }} activeStyle={{ color: "purple" }} exact to="/" >Char exercise</NavLink>
        <NavLink style={{ color: "white", textDecoration: "none" }} activeStyle={{ color: "purple" }} to="/ajax" >Ajax exercise</NavLink>
        <NavLink style={{ color: "white", textDecoration: "none" }} activeStyle={{ color: "purple" }} to="/exit" >Salir</NavLink>
      </nav>
      <Routes />
    </div>
  );
}

export default App;
