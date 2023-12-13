import { useState } from "react"
import './App.css'

export default function Promociones(){
    function calculoResta() {
        if (cantidad<1) {
            setPrecio(0)
        }
        else{
           setPrecio( precio -5000 ) 
           setCantidad(cantidad - 1)
        }
        
        
        
    }

    function calculoSuma(){
        setCantidad(cantidad + 1)
        setPrecio(cantidad * 5000 + 5000)
        

        // setPrecio(precio + 500)
    }

    const[cantidad, setCantidad] = useState(0)
    const[precio, setPrecio] = useState(0)

    return(
        <section className="promo">
            <h3>Precio General: 5000</h3>
            <span onClick={calculoResta}>-</span>
            <span>{cantidad}</span>
            <span onClick={calculoSuma}>+</span>
            <h3>Precio alan: 5000</h3>
            <h3>Precio juvilado: 5000</h3>
            <p>Precio final: {precio}</p>



        </section>


    )


}