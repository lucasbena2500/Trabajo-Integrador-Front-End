import CardCandy from "./components/CardCandy";
export default function Candy() {
    const Combos = [
        {
            titulo1: "Combo Mundial",
            estado1: "10000$",
            imagen1: "comboseleccion.jpg",
          
        },
        {
            titulo1: "FNAF Combo",
            estado1: "15000$",
            imagen1: "fnafcombo.jpg",
        },
        {
            titulo1: "Combo Trolls",
            estado1: "9500",
            imagen1: "trollscombo.jpg",
        },
        {
            titulo1: "Gaseosa + Pochoclo + Pancho",
            estado1: "6000$",
            imagen1: "combocompleto.jpg",
        },
        {
            titulo1: "Pochoclo Grande + Pochoclo chico",
            estado1: "4000$",
            imagen1: "pochoclocombo.jpg",
        },
        {
            titulo1: "Combo Mario",
            estado1: "7500$",
            imagen1: "mariocombo.jpg",
        }
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