import { FaUserCheck } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export default function Hider() {

    function hamburguesa () {
        setAbrir(!abrir)
        
    }
    function hamburguesa1() {
        setAbrir(!abrir)
    }
    const [abrir,setAbrir]= useState (false)


    return(
        <section>
            <header className="Encabezado">
                {abrir 
                ? <div className="navegacion2">
                    <Link className="navegacion_principal1" to={"/"} >Peliculas</Link>
                    <Link className="navegacion_principal1" to={"/Candy"}>Candy Store</Link>
                    <Link className="navegacion_principal1" >Promociones</Link>
                </div>
                :""
                }
                <h1>CineBright</h1>
                    <div>
                        
                             <GiHamburgerMenu className="hamburguesa_icono" onClick={hamburguesa}>
                        </GiHamburgerMenu>
                        
                       
                         <div className="navegacionn">
                      <Link className="navegacion_principal" to={"/"}>Peliculas</Link>
                    <Link className="navegacion_principal" to={"/Candy"} id="tienda" >Candy Store</Link>
                    <Link className="navegacion_principal" to={"/promociones"}>Promociones</Link> 
                    </div>
                    </div>
                   
                       
                
                    
                <div className="boton_usuario">
                    <button ><Link to={"/formulario_uno"}><FaUserCheck/>Iniciar Sesión</Link></button>
                    <button><Link to={"/formulario_dos"}><FaUserGear/>Registrarse</Link></button> 
                </div>
                                     
            </header>
        </section>    
            
            
        
    )

}