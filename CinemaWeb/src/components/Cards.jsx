export default function Card(props) {
   
    return(
        <article className="peliculas_central_foto">
            <img src={props.imagen}/>
            <h1 className="titulo_peliculas">{props.titulo}</h1>
            <p className="estado-pelicula">{props.estado}</p>
            
        </article>


    )
}