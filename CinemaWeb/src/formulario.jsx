import './formulario.css'
import Footer from './footer'
export default function Formulario() {
    function Notificacion_inicio1() {
      if (Notificacion_inicio1 = "button") {
         alert("Sesión Cancelada")
      }
    }
    function Notificacion_inicio2() {
      if (Notificacion_inicio2 = "button") {
         alert ("¡Sesión Iniciada Correctamente!")
      }
    }
   return(
      <>
       <section className="formulario_inicio">
          <h1 className='formulario_title'>Inicio de Sesión</h1>
        <form action="">
        <div className='formulario_datos'>
            <label htmlFor="">
         Correo Electrónico
        </label>
        <input type="text" placeholder='gmail, hotmail, etc'/>

        <label htmlFor="">
         Contraseña
        </label>
        <input type="text" placeholder="contraseña"/>
        </div>

        <div className='formulario_inicio_botones'>
                <button><a href="http://localhost:5173/" onClick={Notificacion_inicio1}>Cancelar</a></button>  
                <button><a href="http://localhost:5173/" onClick={Notificacion_inicio2}>Confirmar</a></button>
                </div>
        
        </form>
        <p>¿No estás registrado? Haz <a href="/formulario_dos">Click aquí</a></p>

       </section>
      
     
      </>
    )
 
    

}