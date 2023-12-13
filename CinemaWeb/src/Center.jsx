import Card from "./components/Cards";
import Footer from "./footer";
import { Link } from "react-router-dom";
export default function Center() {

    const peliculas = [
        
        {
            titulo: "TheMarvels",
            estado: "Estreno",
            imagen: "themarvels.jpg",
           
        },
        {
            titulo: "Trolls 3",
            estado: "Estreno",
            imagen: "Trolls_3_Todos_juntos-317254315-large.jpg",
        },
        {
            titulo: "Five Night At Freddy",
            estado: "Estreno",
            imagen: "Five_Nights_at_Freddy_s-397761188-large.jpg",
        },
        {
            titulo: "The Amazing Spider Man 3",
            estado: "Estreno",
            imagen: "theamazingspiderman3.jpg",
        },
        {
            titulo: "Megamente 2",
            estado: "Proximamente",
            imagen: "megamente2.jpg",
        },
        {
            titulo: "SuperMarioBros",
            estado: "Estreno",
            imagen: "mario_bros.jpg",
        },
        
        {
            titulo: "Elijo Creer",
            estado: "Proximamente",
            imagen: "elijo creer.jpg",
        },
        {
            titulo: "Napoleón",
            estado: "Proximamente",
            imagen: "napoleon.jpg",
            
        },
        {
            titulo: "Shreck 5",
            estado: "Proximamente",
            imagen: "shreck5.jpg"
        },
        
    ]
    return(
    <>
        <section>
        <div className="peliculas_foto">
            {peliculas.map((pelicula, index)=>(
                  <Link to={"/aña"}>
                    <Card  key = {index} imagen={pelicula.imagen} titulo={pelicula.titulo} estado={pelicula.estado} ></Card>
                  </Link>
                
            
        ))

        }
        </div>

        </section>
        <Footer/>  

    </>

       
    )

}

