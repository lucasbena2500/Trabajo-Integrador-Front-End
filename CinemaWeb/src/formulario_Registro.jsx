import './formulario.css'

export default function Formulario(){
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
                <button>Cancelar</button>  
                <button>Confirmar</button>
            </div>
            
            </form>




        </section>

    )

}