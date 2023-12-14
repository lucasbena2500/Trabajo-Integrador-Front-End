import CardCandy from "./components/CardCandy";
export default function Candy() {
    const Combos = [
        {
            titulo1: "sasas",
            estado1: "Estreno1",
            imagen1: "comboseleccion.jpg",
          
        },
        {
            titulo1: "Trolls 31",
            estado1: "Estreno",
            imagen1: "fnafcombo.jpg",
        },
        {
            titulo1: "Five Night At Freddy1",
            estado1: "Estreno1",
            imagen1: "trollscombo.jpg",
        },
        {
            titulo1: "The Amazing Spider Man 31",
            estado1: "Estreno1",
            imagen1: "combocompleto.jpg",
        },
        {
            titulo1: "Megamente 21",
            estado1: "Proximamente1",
            imagen1: "pochoclocombo.jpg",
        },
    ]
    return(
        <>
        <section>
        <div className="peliculas_foto">
            {Combos.map((Combo, index)=>(
                <CardCandy  key={index} imagen1={Combo.imagen1} titulo1={Combo.titulo1} estado1={Combo.estado1} ></CardCandy>




    ))
   
        
}
 </div>
    </section>
        </>
    )
}