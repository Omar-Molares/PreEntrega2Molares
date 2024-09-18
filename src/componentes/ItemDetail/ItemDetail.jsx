import React from 'react'

const ItemDetail = ({id, marca, modelo, precio, img}) => {
  return (
    <div>
      <h2>Marca: {marca}</h2>
      <h3>Modelo: {modelo}</h3>
      <h3>Precio: {precio}</h3>
      <img src={img} alt={marca} />
      
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda sequi ipsa obcaecati ea unde cum tenetur perspiciatis impedit,
         ullam praesentium atque qui dicta blanditiis ad, harum laudantium? Neque, cum.</p>
    </div>
  )
}

export default ItemDetail
