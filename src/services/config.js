import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAzPmZ82HxzCF_e5FCxFcvLFUUn8gIrKns",
  authDomain: "venta-motos.firebaseapp.com",
  projectId: "venta-motos",
  storageBucket: "venta-motos.appspot.com",
  messagingSenderId: "481559290440",
  appId: "1:481559290440:web:284cc237eece1e70fa6e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/* const misProductos = [
    {marca: "Kawasaki", modelo: "z1000", precio: 18000, stock: 10, img: "../../public/Z1000.jpg", idCat: "kawasaki", detalle: "La Naket más potente del mercado"},
    {marca: "Kawasaki", modelo: "z400", precio: 10000, stock: 8, img: "../../public/z400.webp", idCat: "kawasaki", detalle: "La Naket de media cilindrada más potente que pode encontrar"},
    {marca: "Honda", modelo: "cbr1000rr", precio: 25000, stock: 12, img: "../../public/cbr1000rr.png", idCat: "honda", detalle: "El tiempo no se detiene en la factoría de Honda y si en 2022 la CBR1000RR-R Fireblade recibió numerosas mejoras, en 2024 vuelve a actualizarse para posicionarse como una de las deportivas de 1000 más atractivas. Se mantiene la cifra de potencia -215 CV a 14.000 rpm- y prácticamente se mantiene la misma de par -113 Nm a 12.000 rpm- pero se modifica la entrega para conseguir una respuesta más contundente en toda la escala de revoluciones."},
    {marca: "Honda", modelo: "Africa Twin Adventure Sports", precio: 30000, stock: 5, img: "../../public/africatwin.jpg", idCat: "honda", detalle: "La Adventure para poder meterte en todo tipo de terrenos, no vas a poder aburrirte al subirte a ella"},
    {marca: "Yamaha", modelo: "MT07", precio: 20000, stock: 15, img: "../../public/mt07.jpg", idCat: "yamaha", detalle: "Una Naked que te va a volar la cabeza con su relación peso/potencia, imposible aburrirse sobre ella"},
    {marca: "Yamaha", modelo: "R3", precio: 8000, stock: 3, img: "../../public/r3.jpg", idCat: "yamaha", detalle: "La moto ideal para empezar en el camino de las moto pista. Su potencia te va a sorprender"},
    {marca: "Benelli", modelo: "TRK502X", precio: 15000, stock: 9, img: "../../public/trk502.jpg", idCat: "otras", detalle: "Una adventure que te va a sorprender, no te vas a bajar de ella por su comodidad y vas a poder ir a donde quieras"},
    {marca: "CFMotos", modelo: "400NK", precio: 8000, stock: 14, img: "../../public/Cf400NK-3.webp", idCat: "otras", detalle: "La Naket más economica que vas a encontrar en el mercado a la altura de las mejores marcas, no la podes dejar escapar"},
]

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    misProductos.forEach((producto) => {
        const nuevoDoc = doc(productosRef)
        batch.set(nuevoDoc, producto)
    })

    try{
        await batch.commit();
        console.log("Productos subidos exitosamente")
    }catch(error){
        console.log("Error subiendo productos", error)
    }
}

subirProductos();*/