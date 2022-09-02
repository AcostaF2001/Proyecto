import { ComponenteMetodopago } from "./ComponenteMetodopago"
import { Componenteayuda } from "./Componenteayuda"
import { Componentehistorial } from "./Componentehistorial"
import { Componenteperfil } from "./Componenteperfil"

export const Componentemenu=({onComponentemenu}) =>{

    return(
        <>
        <ComponenteMetodopago onComponenteMetodopago={onComponenteMetodopago}/>
        <Componenteayuda onComponenteayuda={onComponenteayuda}/>
        <Componentehistorial onComponentehistorial={onComponentehistorial}/>
        <Componenteperfil onComponenteperfil={onComponenteperfil}/>


        

        </>
    )

}