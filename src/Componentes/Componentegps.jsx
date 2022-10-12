import { UbicacionActual } from "./UbicacionActual"
import { ListaDirecciones } from "./ListaDirecciones"
import { IngresarDireccion } from "./IngresarDireccion"
import { useNavigate } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import gps from "../assets/images/gps/Mapa.png"
export const Componentgps=({onComponentgps})=>{

    const navigate = useNavigate();


    const registrardireccion =()=>{
        navigate("/home")
    }

    return(
        <>

        <div className="header mt-4 ms-2 mx-auto">
            <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize: '35px' }}>Ingresa a la direccion que llegara tu pedido</h1>
        </div>

      
        
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" style={{color: '#8A68A5'}} className="form-text ms-5  ">Direccion</label>
                <input type="email" className="form-control w-75 mx-auto mb-3" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <img src={gps} alt="" className="ms-5 w-90 mb-3"/>
            
            <div className="d-grid gap-2 d-md-block mb-5">
                <button type="submit" style={{color: '#8A68A5'}} onClick={registrardireccion} className="btn btn-primary m-auto ">Agregar Direccion</button>
            </div>
           
        </form>
        

        </>
    )
    
}