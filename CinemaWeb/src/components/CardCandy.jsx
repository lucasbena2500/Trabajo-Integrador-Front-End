export default function CardCandy(props) {
    return(
        <section>
            <article className="peliculas_central_foto">
            <img src={props.imagen1}/>
            <h1 className="titulo_peliculas">{props.titulo1}</h1>
            <p className="estado-pelicula">{props.estado1}</p>
            
        </article>
        </section>


    )
}