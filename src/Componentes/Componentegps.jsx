import { UbicacionActual } from "./UbicacionActual"
import { ListaDirecciones } from "./ListaDirecciones"
import { IngresarDireccion } from "./IngresarDireccion"
export const Componentgps=({onComponentgps})=>{

    return(
        <>
        <UbicacionActual onUbicacionActual={UbicacionActual}/>
        <IngresarDireccion onIngresarDireccion={IngresarDireccion}/>
        <ol>
        
        ListaDirecciones.map(
           
        )
        </ol>

        </>
    )
    
}