import './formulario.css'

export default function Formulario(){
    function Notificacion_inicio3() {
        if (Notificacion_inicio3 = "button") {
            alert ("Registro Cancelado")
        }
    }
    function Notificacion_inicio4() {
        if (Notificacion_inicio4 = "button") {
        alert("¡Te has Registrado con Exito!")
    }
    }
    return(
        
        <section className="formulario_inicio1">
            <h1 className='formulario_title1'>Registrarse</h1>
            <form action="">
                <div className="formulario_datos1">
                    <label htmlFor="">
                Nombre
                </label>
                <input type="text" />
                
                <label htmlFor="">
                Apellido
                </label>
                <input type="text" />
                
                <label htmlFor="">
                Edad
                </label>
                <input type="text" />
                
                <label htmlFor="">
                Correo Electronico
                </label>
                <input type="text" />
                <label htmlFor="">
                Contraseña
                </label>
                <input type="text" />
                <label htmlFor="">
                 Repetir Contraseña
                </label>
                <input type="text" />
                </div>
            
            <div className='formulario_inicio_botones'>
                <button><a href="http://localhost:5173/" onClick={Notificacion_inicio3}>Cancelar</a></button>  
                <button><a href="http://localhost:5173/" onClick={Notificacion_inicio4}>Confirmar</a></button>
            </div>
            
            </form>




        </section>

    )

}