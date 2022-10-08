import { useState } from "react"
import { Componentgps } from "./Componentegps"
import { Componentecat } from "./Componentecat"
import { Componentemenu } from "./Componentemenu"
import { Componenteayuda } from "./Componenteayuda"
import { Componentebusqueda } from "./Componentebusqueda"

export const Componenthome = () =>{
    return(
        <>
        <Componentgps onComponentgps={Componentgps}/>
        <Componentecat onComponentecat={Componentecat}/>
        <Componentemenu onComponentemenu={Componentemenu}/>
        <Componenteayuda onComponenteayuda={Componenteayuda}/>
        <Componentebusqueda onComponentebusqueda={Componentebusqueda}/>
        </>
    )
}