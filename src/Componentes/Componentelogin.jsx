import { Logingoogle } from "./logingoogle"
import { Loginnumero } from "./loginnumero"
import { Componenteayuda } from "./Componenteayuda"
import { useState } from "react"

export const Componentlogin=()=>{

    return(
        <>
         <Loginnumero onloginnumero={onloginnumero}/>
         <Logingoogle onLogingoogle={onLogingoogle}/>
         <Componenteayuda onComponenteayuda={onComponenteayuda}/>

        </>
    )
}