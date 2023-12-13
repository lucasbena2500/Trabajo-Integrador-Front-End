import { FaUserCheck } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Center from "./Center";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export default function Hider() {

    function hamburguesa () {
        setAbrir(!abrir)
        
    }
    const [abrir,setAbrir]= useState (false)


    return(
        <section>
            <header className="Encabezado">
                {abrir 
                ? <div className="navegacion2">
                    <Link className="navegacion_principal1" to={"/incio"} >Peliculas</Link>
                    <Link className="navegacion_principal1">Candy Store</Link>
                    <Link className="navegacion_principal1">Sucursales</Link>
                    <Link className="navegacion_principal1" >Promociones</Link> 
                </div>
                :""
                }
                <h1>CineBright</h1>
                    <div>
                        
                             <GiHamburgerMenu className="hamburguesa_icono" onClick={hamburguesa}> 
                        </GiHamburgerMenu>
                        
                       
                         <div className="navegacionn">
                      <Link className="navegacion_principal" to={"/incio"}>Peliculas</Link>
                    <Link className="navegacion_principal" id="tienda">Candy Store</Link>
                    <Link className="navegacion_principal" >Sucursales</Link>
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