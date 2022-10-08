import { Logingoogle } from "./logingoogle"
import { Loginnumero } from "./loginnumero"
import { Componenteayuda } from "./Componenteayuda"
import { useState } from "react"
import Logo from "./logo.png"
import GoogleButton from "react-google-button"
import { UserAuth } from "./Firebase/GoogleAuth"
export const Componentlogin=()=>{

    const {googleSignIn} =UserAuth();

    const HandleGoogleSignIn= async()=>{
        try{
            await googleSignIn();

        }catch(error){
            console.log(error)
        }
    }


    return(
        <>
         <div>
            <img src={Logo} alt="" />
         </div>

         <div>
            <GoogleButton onClick={HandleGoogleSignIn}/>
         </div>
         
         
         

        </>
    )
}