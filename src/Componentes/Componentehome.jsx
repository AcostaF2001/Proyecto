import { useState } from "react"
import { Componentgps } from "./Componentegps"
import { Componentecat } from "./Componentecat"
import { Componentemenu } from "./Componentemenu"
import { Componenteayuda } from "./Componenteayuda"
import { Componentebusqueda } from "./Componentebusqueda"

export const Componenthome = () =>{
    return(
        <>
        <Componentgps onComponentgps={onComponentgps}/>
        <Componentecat onComponentecat={onComponentecat}/>
        <Componentemenu onComponentemenu={onComponentemenu}/>
        <Componenteayuda onComponenteayuda={onComponenteayuda}/>
        <Componentebusqueda onComponentebusqueda={onComponentebusqueda}/>
        </>
    )
}