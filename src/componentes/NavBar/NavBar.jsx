import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1 className="LogoMarca">MotorBike</h1>

        <nav>
            <ul>
                <li className="btn btn-outline-primary">Motos</li>
                <li className="btn btn-outline-danger">Kawasaki</li>
                <li className="btn btn-outline-danger" >Honda</li>
                <li className="btn btn-outline-danger" >Yamaha</li>
                <li className="btn btn-outline-success" >Otras</li>
            </ul>
        </nav>

        <CartWidget/>

      
    </header>
  )
}

export default NavBar
