import './formulario.css'
export default function Formulario() {
    return(
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
        
        </form>
        <p>¿No estás registrado? Haz <a href="/formulario_dos">Click aquí</a></p>

       </section>
      

    )
 
    

}