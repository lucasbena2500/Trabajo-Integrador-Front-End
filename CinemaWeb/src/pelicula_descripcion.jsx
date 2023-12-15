import './pelicula_descripcion.css'
export default function Pelicula_descripcion(props) {
    return(
        <section className='Estructura_descripcion'>
            
          <img src= {props.imagen} alt="trolls" className='Estructura_descripcion_img'/>
           
            <p className='Estructura_descripcion_texto'>{props.parrafo}</p>
           
            
        </section>



    )
}