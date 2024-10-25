/*const misProductos = [
    {id: "1", marca: "Kawasaki", modelo: "z1000", precio: 18000, stock: 10, img: "../../public/Z1000.jpg", idCat: "kawasaki", detalle: "La Naket más potente del mercado"},
    {id: "2", marca: "Kawasaki", modelo: "z400", precio: 10000, stock: 8, img: "../../public/z400.webp", idCat: "kawasaki", detalle: "La Naket más potente del mercado"},
    {id: "3", marca: "Honda", modelo: "cbr1000rr", precio: 25000, stock: 12, img: "../../public/cbr1000rr.png", idCat: "honda", detalle: "El tiempo no se detiene en la factoría de Honda y si en 2022 la CBR1000RR-R Fireblade recibió numerosas mejoras, en 2024 vuelve a actualizarse para posicionarse como una de las deportivas de 1000 más atractivas. Se mantiene la cifra de potencia -215 CV a 14.000 rpm- y prácticamente se mantiene la misma de par -113 Nm a 12.000 rpm- pero se modifica la entrega para conseguir una respuesta más contundente en toda la escala de revoluciones."},
    {id: "4", marca: "Honda", modelo: "Africa Twin Adventure Sports", precio: 30000, stock: 5, img: "../../public/africatwin.jpg", idCat: "honda", detalle: "La Naket más potente del mercado"},
    {id: "5", marca: "Yamaha", modelo: "MT07", precio: 20000, stock: 15, img: "../../public/mt07.jpg", idCat: "yamaha", detalle: "La Naket más potente del mercado"},
    {id: "6", marca: "Yamaha", modelo: "R3", precio: 8000, stock: 3, img: "../../public/r3.jpg", idCat: "yamaha", detalle: "La Naket más potente del mercado"},
    {id: "7", marca: "Benelli", modelo: "TRK502X", precio: 15000, stock: 9, img: "../../public/trk502.jpg", idCat: "otras", detalle: "La Naket más potente del mercado"},
    {id: "8", marca: "CFMotos", modelo: "400NK", precio: 8000, stock: 14, img: "../../public/Cf400NK-3.webp", idCat: "otras", detalle: "La Naket más potente del mercado"},
]*/

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