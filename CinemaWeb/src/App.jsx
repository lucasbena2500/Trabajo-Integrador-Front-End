import './App.css'
import Center from './Center'
import Hider from './hider'
import Footer from './footer'
import {Routes, Route} from 'react-router-dom'
import Formulario from './formulario'
import Formulario_Registro from './formulario_Registro'
import Promociones from './promociones'
function App() {

  return (
    <>
      
    <Hider/>
    


    
    <Routes>
      <Route path='/incio' element={<Center></Center>}>
      </Route>
      <Route path='/formulario_uno' element={<Formulario></Formulario>}> 
      </Route>
      <Route path='/formulario_dos' element={<Formulario_Registro></Formulario_Registro>}></Route>
      <Route path='/promociones' element={<Promociones/>}></Route>
      <Route path='aña'> </Route>
    </Routes>
    


    
    
  
   
    </>
  )
}

export default App
