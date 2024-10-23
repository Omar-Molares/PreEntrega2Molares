import React from 'react'
import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategorias } from '../../asynmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const {idCategoria} = useParams()

  useEffect(() =>{
    setLoading(true)

    const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

    funcionProductos(idCategoria)
    .then(res => setProductos(res))
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      console.log("Proceso Finalizado")
      setLoading(false)
    })

   
  }, [idCategoria])  

  return (

    <>
    <div>
      <h2 className='EstiloGreeting'>Mis Productos</h2>
      <h3>la moto que buscas</h3>
      {loading ? <Loader/> : <ItemList productos={productos}/>}
    </div> 
    <ItemList productos={productos}/>

    </>     
  )
}

export default ItemListContainer
