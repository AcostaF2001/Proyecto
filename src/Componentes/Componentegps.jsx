import { UbicacionActual } from "./UbicacionActual"
import { ListaDirecciones } from "./ListaDirecciones"
import { IngresarDireccion } from "./IngresarDireccion"
export const Componentgps=({onComponentgps})=>{

    return(
        <>
        <UbicacionActual onUbicacionActual={onUbicacionActual}/>
        <IngresarDireccion onIngresarDireccion={onIngresarDireccion}/>
        <ol>
        
        ListaDirecciones.map(
           
        )
        </ol>

        </>
    )
    
}