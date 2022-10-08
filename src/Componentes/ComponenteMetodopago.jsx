import { Agregartarjeta } from "./Agregartarjeta"
import { AgregarDaviplata } from "./AgregarDaviplata"
import { AgregarNequi } from "./AgregarNequi"
import { Componenteayuda } from "./Componenteayuda"
export const ComponenteMetodopago=({onComponenteMetodopago})=>{

    return(
        <>
        <Agregartarjeta onAgregartarjeta={Agregartarjeta}/>
        <AgregarDaviplata onAgregarDaviplata={AgregarDaviplata}/>
        <AgregarNequi onAgregarNequi={AgregarNequi}/>
        <Componenteayuda onComponenteayuda={Componenteayuda}/>

        


        
        </>
    )
}