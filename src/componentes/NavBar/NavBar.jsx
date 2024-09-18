import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="LogoMarca">MotorBike</h1>
      </Link>



      <nav>
            <ul>
                <li className="btn btn-outline-primary">
                 <NavLink to="/">Inicio</NavLink> 
                </li>
                <li className="btn btn-outline-danger">
                 <NavLink to="/categoria/kawasaki">Kawasaki</NavLink>  
                </li>
                <li className="btn btn-outline-danger" >
                <NavLink to="/categoria/honda">Honda</NavLink>  
                </li>
                <li className="btn btn-outline-danger" >
                <NavLink to="/categoria/yamaha">Yamaha</NavLink>  
                </li>
                <li className="btn btn-outline-success" >
                <NavLink to="/categoria/otras">Otras</NavLink>
                </li>
            </ul>
        </nav>
        
      {/*<nav>
            <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                
                </li>

                <li>
                  <NavLink to="/categoria/almacen"> Almacen</NavLink>
                   
                </li>

                <li>
                 <NavLink to="/categoria/lacteos"> Lacteos </NavLink> 
                </li>
            </ul>
        </nav>*/}
        <CartWidget/>      
    </header>
  )
}

export default NavBar
