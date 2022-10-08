import { Logingoogle } from "./logingoogle"
import { Logincorreo } from "./logincorreo"
import { Componenteayuda } from "./Componenteayuda"
import { useState } from "react"
import Logo from "./logo.png"
import GoogleButton from "react-google-button"
import { UserAuth } from "./Firebase/GoogleAuth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
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
        navigate("./Registro")
    }


    return(
        <>
         <div>
            <img src={Logo} alt="" />
         </div>

         <div>
            <GoogleButton onClick={HandleGoogleSignIn}/>
         </div>

         <div>
            <button className="btn btn-primary" onClick={RegistrarseCorreo}>Correo y Contraseña</button>
         </div>
         

        </>
    )

}