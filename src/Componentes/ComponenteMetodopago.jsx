import { Agregartarjeta } from "./Agregartarjeta"
import { AgregarDaviplata } from "./AgregarDaviplata"
import { AgregarNequi } from "./AgregarNequi"
import { Componenteayuda } from "./Componenteayuda"
export const ComponenteMetodopago=({onComponenteMetodopago})=>{

    return(
        <>
        <Agregartarjeta onAgregartarjeta={onAgregartarjeta}/>
        <AgregarDaviplata onAgregarDaviplata={onAgregarDaviplata}/>
        <AgregarNequi onAgregarNequi={onAgregarNequi}/>
        <Componenteayuda onComponenteayuda={onComponenteayuda}/>

        


        
        </>
    )
}