import './App.css'
import Center from './Center'
import Hider from './hider'
import {Routes, Route} from 'react-router-dom'
import Formulario from './formulario'
import Formulario_Registro from './formulario_Registro'
import Promociones from './promociones'
import Pelicula_descripcion from './pelicula_descripcion'
import Candy from './Candy'
   function App() {

  return (
    <>
      
    <Hider/>
    
    

    
    <Routes>
      
      <Route path='/' element={<Center></Center>}>
      </Route>
      <Route path='/formulario_uno' element={<Formulario></Formulario>}> 
      </Route>
      <Route path='/formulario_dos' element={<Formulario_Registro></Formulario_Registro>}></Route>
      <Route path='/promociones' element={<Promociones></Promociones>}></Route>
      <Route path='/Candy'element={<Candy></Candy>}></Route>
      <Route path='/1' element={<Pelicula_descripcion  imagen="The-Marvels-poster-1.jpg" parrafo="Conocida como Capitana Marvel, Carol Danvers (Brie Larson) ha luchado duro para triunfar no solo sobre el pueblo de los Kree, sino también sobre la llamada Inteligencia Superior: un ser en la cima de la raza alienígena. Pero todas las acciones de la Capitana Marvel también tienen consecuencias. El planeta natal de los Kree, Hala, está al borde del colapso y la nueva líder Dar-Benn (Zawe Ashton) hará cualquier cosa para evitarlo. Entre otros intentos, crea un misterioso agujero de gusano que hace que los poderes de Carol se vuelvan locos. Parece como si de repente hubieran establecido una conexión con la hija ya adulta de su mejor amiga, la astronauta de S.A.B.E.R. Monica Rambeau (Teyonah Parris), así como con su superfan absoluta Kamala Khan alias Ms Marvel (Iman Vellani). Ir por libre, tras ayudar a Los Vengadores, ya no es una opción. Las tres mujeres deben unir sus fuerzas para acabar con la nueva amenaza y devolver la estabilidad al universo."></Pelicula_descripcion>}> </Route>
      <Route path='/2'element={<Pelicula_descripcion imagen="Trolls_3_Todos_juntos-317254315-large.jpg" parrafo="Después de dos películas de verdadera amistad y constante coqueteo, Poppy (Anna Kendrick) y Ramón (Justin Timberlake) son ahora oficialmente, y por fin, ¡una pareja! A medida que se conocen más, Poppy descubre que Ramón tiene un pasado secreto. En el pasado fue parte de su boyband favorita, BroZone, con sus cuatro hermanos: Floyd (Troye Sivan, la sensación del electropop nominado al Globo de Oro) John Dory (Eric André; Sing 2: ¡Ven y canta de nuevo!), Spruce (Daveed Diggs, ganador del Grammy; Hamilton) y Clay (Kid Cudi, ganador del Grammy; No mires arriba). BroZone se desintegró cuando Ramón apenas era un niño, y al igual que su familia, no ha vuelto a ver a sus hermanos desde entonces. Pero cuando Floyd, el hermano de Ramón, es secuestrado por sus talentos musicales por un par de unos malvados villanos pop-stars - Velvet (Amy Schumer, ganadora del Emmy; Esta chica es un desastre) y Veneer (Andrew Rannells, ganador del Grammy y nominado al Tony; The Book of Mormon) - Ramón y Poppy se embarcan en un viaje estremecedor y emocional para reunir a los otros hermanos y así rescatar a Floyd, de un destino aún peor, que el olvido de la cultura pop."></Pelicula_descripcion>}></Route>
      <Route path='/3'element={<Pelicula_descripcion imagen="Five_Nights_at_Freddy_s-397761188-large.jpg" parrafo="Película de terror sobrenatural y suspense basada en la exitosa franquicia de videojuegos de terror y supervivencia Five nights at Freddy's. Freddy Fazbear's Pizza es un restaurante familiar donde la fantasía y la diversión cobran vida, ya que utiliza mascotas animatrónicas de tamaño natural para las fiestas infantiles que allí se celebran. Cuando llega la noche, comienza el turno de Mike Schmidt (Josh Hutcherson), el nuevo guardia de seguridad de Freddy's que ahora, después de pasar por algunos problemas financieros, trabaja en este restaurante. Cuando pase su primera noche en el trabajo, Mike se dará cuenta de que el turno nocturno en Freddy's no será tan fácil de superar como esperaba, y vivirá más de una situación aterradora al cobrar vida las mascotas animatrónicas de este siniestro local."></Pelicula_descripcion>}></Route>
      <Route path='/4' element={<Pelicula_descripcion imagen="theamazingspiderman3.jpg" parrafo="Peter Parker (Andrew Garfield) regresa en The Amazing Spider-Man 3, ¡la tercera entrega de la serie The Amazing Spider-Man! Tres años después de los eventos de Spider-Man: Sin Camino a Casa, donde vive con su Mary Jane Watson (Shailene Woodley), pero todo cambia con la aparición de un astuto Gata Negra, interpretado por Felicity Jones, y la llegada de Harry Osborn/Duende Verde (Dane DeHaan), un loco despiadado. El reinado de terror de Duende Verde obliga a Hombre-Araña a salir de su exilio autoimpuesto y entrar en la batalla final por la supervivencia de la ciudad de New York ... ¡y la suya!"></Pelicula_descripcion>}></Route>
      <Route path='/5' element={<Pelicula_descripcion imagen="megamente.jpg" parrafo="Megamind es un supervillano. Durante años, ha intentado conquistar Metro City, pero un héroe llamado Metro Man se lo impedía. Tras muchos intentos, Megamind consigue matarlo. De repente, su vida carece de sentido. ¿Qué puede hacer un supervillano sin un superhéroe con el que enfrentarse? Crear a Titán, un nuevo héroe. Sin embargo Titán empieza a pensar que es mucho más divertido destruir el mundo en vez de salvarlo. ¿Podrá derrotar Megamind a su diabólica criatura?"></Pelicula_descripcion>}></Route>
      <Route path='/6' element={<Pelicula_descripcion imagen="mariobros.jpg" parrafo="Adaptación de la serie de videojuegos de Nintendo. La película cuenta la historia de Mario y Luigi, dos hermanos que viajan a un mundo oculto para rescatar a la Princesa Peach, capturada por el malvado Rey Bowser. Las cosas, sin embargo no serán sencillas. Mario y Luigi tendrán que enfrentarse a un ejército de setas animadas antes de luchar contra su oponente. Rutas de ladrillos y castillos con múltiples peligros serán algunos de los obstáculos que los hermanos tendrán que superar para conseguir su objetivo."></Pelicula_descripcion>}></Route>
      <Route path='/7' element={<Pelicula_descripcion imagen="elijocreer.jpg" parrafo="Narra el épico título obtenido por la Selección Argentina en el Mundial de Fútbol Qatar 2022 con testimonios de los protagonistas, contados desde la intimidad y en primera persona."></Pelicula_descripcion>}></Route>
      <Route path='/8' element={<Pelicula_descripcion imagen="napoleon.jpg" parrafo="Napoleón es una epopeya de acción llena de espectáculo que detalla el accidentado ascenso y caída del emblemático emperador francés Napoleón Bonaparte, interpretado por el ganador al Oscar, Joaquin Phoenix. Con un impresionante escenario cinematográfico a gran escala orquestado por el legendario director Ridley Scott, la película capta la implacable travesía de Bonaparte hacia el poder a través del prisma de su adictiva y volátil relación con su único y verdadero amor, Josefina, mostrando sus visionarias tácticas militares y políticas plasmadas en algunas de las secuencias de batalla más dinámicas y realistas jamás filmadas."></Pelicula_descripcion>}></Route>
      <Route path='/9' element={<Pelicula_descripcion imagen="shreck.jpg" parrafo="Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa esconde un oscuro secreto."></Pelicula_descripcion>}></Route>


    </Routes>
    
      

    
    
  
   
    </>
  )
}

 export default App
