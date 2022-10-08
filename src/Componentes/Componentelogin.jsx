import { Logingoogle } from "./logingoogle"
import { Logincorreo } from "./logincorreo"
import { Componenteayuda } from "./Componenteayuda"
import { useState } from "react"
import Logo from "./logo.png"
import GoogleButton from "react-google-button"
import { UserAuth } from "./Firebase/GoogleAuth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./CSS/Fondo.css"
export const Componentlogin=()=>{

    const {googleSignIn,user} =UserAuth();
    const navigate= useNavigate();
    const HandleGoogleSignIn= async()=>{
        try{
            await googleSignIn();
            navigate("./home")
        }catch(error){
            console.log(error)
        }
    }

    const RegistrarseCorreo=()=>{
        navigate("./Login")
    }


    return(
        <>
        <div className="fondo">
            <div className="header">
                <div className="Sombra">
                    <img src={Logo} alt="" />
                </div>

            </div>

                
            <div className="d-grid gap-2 d-md-block">
                <GoogleButton  onClick={HandleGoogleSignIn}/>
                <button className="btn btn-primary"  onClick={RegistrarseCorreo}>Correo y Contraseña</button>

            </div>
            
                

                
           

           
        </div>
        
         

        </>
    )

}