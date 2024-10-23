import { useState } from "react"

const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState (inicial)
  
    const sumarContador = () => {
      if (contador < stock){
        setContador(contador + 1)
      }
    }
  
    const restarContador = () => {
      if (contador > inicial) {
        setContador( contador - 1)
      }
    }
    return (
  
      <>
       <div>
        <button className="btn btn-dark" onClick={restarContador}> - </button>
        <strong className="btn btn-info">{contador}</strong>
        <button className="btn btn-dark" onClick={sumarContador}> + </button>      
       </div>
  
       <button className="btn btn-primary" onClick={() =>funcionAgregar(contador)}>Agregar al Carrito</button>  
      </>
     
    )
  }
  
  export default Contador