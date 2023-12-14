import './pelicula_descripcion.css'
import { Link } from "react-router-dom";
export default function Pelicula_descripcion() {
    return(
        <section className='Estructura_descripcion'>
            
          <Link to={"/descripcion_trolls"}><img src="Trolls_3_Todos_juntos-317254315-large.jpg" alt="trolls" className='Estructura_descripcion_img'/>
           </Link>
            <p className='Estructura_descripcion_texto'>Después de dos películas de verdadera amistad y constante coqueteo, Poppy (Anna Kendrick) y Ramón (Justin Timberlake) son ahora oficialmente, y por fin, ¡una pareja! A medida que se conocen más, Poppy descubre que Ramón tiene un pasado secreto. En el pasado fue parte de su boyband favorita, BroZone, con sus cuatro hermanos: Floyd (Troye Sivan, la sensación del electropop nominado al Globo de Oro) John Dory (Eric André; Sing 2: ¡Ven y canta de nuevo!), Spruce (Daveed Diggs, ganador del Grammy; Hamilton) y Clay (Kid Cudi, ganador del Grammy; No mires arriba). BroZone se desintegró cuando Ramón apenas era un niño, y al igual que su familia, no ha vuelto a ver a sus hermanos desde entonces. Pero cuando Floyd, el hermano de Ramón, es secuestrado por sus talentos musicales por un par de unos malvados villanos pop-stars - Velvet (Amy Schumer, ganadora del Emmy; Esta chica es un desastre) y Veneer (Andrew Rannells, ganador del Grammy y nominado al Tony; The Book of Mormon) - Ramón y Poppy se embarcan en un viaje estremecedor y emocional para reunir a los otros hermanos y así rescatar a Floyd, de un destino aún peor, que el olvido de la cultura pop.</p>
           
            
        </section>



    )
}