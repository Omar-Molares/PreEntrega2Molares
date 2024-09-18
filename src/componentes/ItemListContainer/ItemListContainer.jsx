import React from 'react'
import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategorias } from '../../asynmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect(() =>{

    const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

    funcionProductos(idCategoria)
    .then(res => setProductos(res))

   
  }, [idCategoria])  

  return (

    <>
    <div>
      <h2 className='EstiloGreeting'>Mis Productos</h2>
      <h3>la moto que buscas</h3>
    </div> 
    <ItemList productos={productos}/>

    </>     
  )
}

export default ItemListContainer
