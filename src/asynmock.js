const misProductos = [
    {id: "1", marca: "Kawasaki", modelo: "z1000", precio: 18000, img: "", idCat: "kawasaki"},
    {id: "2", marca: "Kawasaki", modelo: "z400", precio: 10000, img: "", idCat: "kawasaki"},
    {id: "3", marca: "Honda", modelo: "cbr1000rr", precio: 25000, img: "", idCat: "honda"},
    {id: "4", marca: "Honda", modelo: "Africa Twin Adventure Sports", precio: 30000, img: "", idCat: "honda"},
    {id: "5", marca: "Yamaha", modelo: "MT07", precio: 20000000, img: "", idCat: "yamaha"},
    {id: "6", marca: "Yamaha", modelo: "R3", precio: 8000, img: "", idCat: "yamaha"},
    {id: "7", marca: "Benelli", modelo: "TRK502X", precio: 15000, img: "", idCat: "otras"},
    {id: "8", marca: "CFMotos", modelo: "400NK", precio: 8000, img: "../../public/Cf400NK-3.webp", idCat: "otras"},
]

export const getProductos = () =>{
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 1000)
    })
}

 export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() =>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 1000)
    })
}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)            
        }, 1000);        
    })
}