import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div className='CartDiv'>
      <Link to="/Cart">
      <img className='ImgCarrito' src="../../../public/carrito2.png" alt="" />
      </Link>
      {
        cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
      }
      
    </div>
  )
}

export default CartWidget
