import { ComponenteMetodopago } from "./ComponenteMetodopago"
import { Componenteayuda } from "./Componenteayuda"
import { Componentehistorial } from "./Componentehistorial"
import { Componenteperfil } from "./Componenteperfil"

export const Componentemenu=({onComponentemenu}) =>{

    return(
        <>
        <ComponenteMetodopago onComponenteMetodopago={ComponenteMetodopago}/>
        <Componenteayuda onComponenteayuda={Componenteayuda}/>
        <Componentehistorial onComponentehistorial={Componentehistorial}/>
        <Componenteperfil onComponenteperfil={Componenteperfil}/>


        

        </>
    )

}