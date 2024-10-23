import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify';

const ItemDetail = ({ id, marca, modelo, precio, img, stock, detalle }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const { agregarAlCarrito } = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
    const item = { id, marca, modelo, precio, stock }
    agregarAlCarrito(item, cantidad)
    toast.success("Agregado al Carrito", {autoClose:1000, theme:"dark", position:"top-center"})
  }
  return (
    <div className='carddetalles'>
      <h2>Marca: {marca}</h2>
      <h3>Modelo: {modelo}</h3>
      <h3>Precio: USD{precio}</h3>
      <img src={img} alt={marca} />

      <p>{detalle}</p>

      {
        agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail
