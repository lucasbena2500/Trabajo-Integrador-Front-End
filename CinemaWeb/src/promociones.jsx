import { useState } from "react"
import './promociones.css'

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
    }
    function calculoResta1() {
        if (cantidad1<1) {
            setPrecio1(0)
        }
        else{
           setPrecio1( precio1 -1500 ) 
           setCantidad1(cantidad1 - 1)
        }
    }

    function calculoSuma1(){
        setCantidad1(cantidad1 + 1)
        setPrecio1(cantidad1 * 1500 + 1500)
    }


        

    function calculoResta2() {
        if (cantidad2<1) {
            setPrecio2(0)
        }
        else{
           setPrecio2( precio2 -3000 ) 
           setCantidad2(cantidad2 - 1)
        }
    }

    function calculoSuma2(){
        setCantidad2(cantidad2+ 1)
        setPrecio2(cantidad2 * 3000 + 3000)
    }

    function calculoResta3() {
        if (cantidad3<1) {
            setPrecio3(0)
        }
        else{
           setPrecio3( precio3 -5000 ) 
           setCantidad3(cantidad3 - 1)
        }
    }

    function calculoSuma3(){
        setCantidad3(cantidad3+ 1)
        setPrecio3(cantidad3 * 5000 + 5000)
    }

      



    const[cantidad, setCantidad] = useState(0)
    const[precio, setPrecio] = useState(0)

    const[cantidad1, setCantidad1] = useState(0)
    const[precio1, setPrecio1] = useState(0)

    const[cantidad2, setCantidad2] = useState(0)
    const[precio2, setPrecio2] = useState(0)

    const[cantidad3, setCantidad3] = useState(0)
    const[precio3, setPrecio3] = useState(0)

    const[precioFinal, setprecioFinal]= useState(0)
    

    return(
        <section className="promocion">
            <div className="precio_general">
                <h3>Precio General: 5000$</h3>
            <button className="boton_general" onClick={calculoResta}>-</button>
            <span className="cantidad">{cantidad}</span>
            <button className="boton_general" onClick={calculoSuma}>+</button>
            <p className="precio_general_texto">Precio: {precio}</p>
            </div>
            
            <div className="precio_general">
                <h3>Precio Jubilados: 1500$</h3>
                <button className="boton_general" onClick={calculoResta1}>-</button>
            <span className="cantidad">{cantidad1}</span>
            <button className="boton_general" onClick={calculoSuma1}>+</button>
            <p className="precio_general_texto">Precio: {precio1}</p>
            </div>
            
            <div className="precio_general">
                <h3>Precio Estudiantes(DNI): 3000$</h3>
                <button className="boton_general" onClick={calculoResta2}>-</button>
            <span className="cantidad">{cantidad2}</span>
            <button className="boton_general" onClick={calculoSuma2}>+</button>
            <p className="precio_general_texto">Precio: {precio2}</p>
            </div>
            
            <div className="precio_general">
                <h3>Promo 2x1 (Con Tarjeta 365): 5000$ </h3>
                <button className="boton_general" onClick={calculoResta3}>-</button>
            <span className="cantidad">{cantidad3}</span>
            <button className="boton_general" onClick={calculoSuma3}>+</button>
            <div className="division-precio-codigo">
                <p className="precio_general_texto">Precio: {precio3}</p>
            <div className="codigo">
                <label htmlFor="">Introduce Codigo</label>
            <input type="text" />
            </div>
            </div>
            </div>
            <section className="monto_final">
            </section>
        </section>


    )


}