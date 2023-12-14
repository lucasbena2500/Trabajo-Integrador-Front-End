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
      <Route path='/descripcion_trolls' element={<Pelicula_descripcion></Pelicula_descripcion>}> </Route>

    </Routes>
    
      

    
    
  
   
    </>
  )
}

 export default App
