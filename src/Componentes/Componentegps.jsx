import { UbicacionActual } from "./UbicacionActual"
import { ListaDirecciones } from "./ListaDirecciones"
import { IngresarDireccion } from "./IngresarDireccion"
export const Componentgps=({onComponentgps})=>{

    return(
        <>

        <h1>Ingresa a la direccion que llegara tu pedido</h1>
        
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Direccion</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">ingresa tu direccion</div>
            </div>
            
            <button type="submit" class="btn btn-primary">Agregar Direccion</button>
        </form>
        

        </>
    )
    
}