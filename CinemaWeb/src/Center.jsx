import Card from "./components/Card";
import Footer from "./footer";
import { Link } from "react-router-dom";
export default function Center() {

    const peliculas = [
        
       {
            titulo: "TheMarvels",
            estado: "Estreno",
            imagen: "The-Marvels-poster-1.jpg",
            link: "/1",
        },
        {
            titulo: "Trolls 3",
            estado: "Estreno",
            imagen: "Trolls_3_Todos_juntos-317254315-large.jpg",
            link: "/2",
        },
        {
            titulo: "Five Night At Freddy",
            estado: "Estreno",
            imagen: "Five_Nights_at_Freddy_s-397761188-large.jpg",
            link: "/3",
        },
        {
            titulo: "The Amazing Spider Man 3",
            estado: "Estreno",
            imagen: "theamazingspiderman3.jpg",
            link: "/4",
        },
        {
            titulo: "Megamente",
            estado: "Proximamente",
            imagen: "megamente.jpg",
            link: "/5",
        },
        {
            titulo: "SuperMarioBros",
            estado: "Estreno",
            imagen: "mario_bros.jpg",
            link: "/6",
        },
        
        {
            titulo: "Elijo Creer",
            estado: "Proximamente",
            imagen: "elijocreer.jpg",
            link: "/7",
        },
        {
            titulo: "Napoleón",
            estado: "Proximamente",
            imagen: "napoleon.jpg",
            link: "/8",
            
        },
        {
            titulo: "Shreck ",
            estado: "Proximamente",
            imagen: "shreck.jpg",
            link: "/9",
        }
        
    ]
    return(
    <>
        <section>
        <div className="peliculas_foto">
            {peliculas.map((pelicula, index)=>(
                  <Link  className="textoEnfoto" to={pelicula.link}  key = {index}>
                    <Card     imagen={pelicula.imagen} titulo={pelicula.titulo} estado={pelicula.estado} ></Card>
                  </Link>
                
            
        ))

        }
        </div>

        </section>
        <Footer/>  

    </>

       
    )

}

