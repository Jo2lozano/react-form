import "./Formulario.css"
import { useState } from "react"

export function Formulario(){

    const [nombre, setNombre]= useState("")
    const [contraseña, setContraseña]= useState("")
    const [error, setError ]= useState(Error)
    

   

//- aqui es importate  nombrar las variables de cada input y tambien es importante generar la alertga  de datos errados 
    

    return(
     <section>
        <h1> CaRtera Inicio</h1>
        
        <form className="Formulario">
            <input type="text"
            value={nombre} 
            
        
            />
            <input type="password"
            value={contraseña}
            
            />
        <button>Iniciar sesion</button>
        </form>

        {error && <p>todo los campos deben de estar llenos o revise su nombre y contraseña</p>}

     </section>
    )


}