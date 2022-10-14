import { useNavigate } from "react-router-dom"
import Primer from "../assets/images/historial/Primer.png"
import Segundo from "../assets/images/historial/Segundo.png"
import Tercero from "../assets/images/historial/Tercero.png"
import volver from "../assets/images/volver.png"
export const Componentehistorial=({onComponentehistorial}) =>{

    const navigate=useNavigate()

    const back=()=>{
        navigate("/home")
    }


    return(
        
        <div className="bg-1 px-2 pb-6 pt-2">
        <div className="header2 mt-4 ms-4 mx-auto">
            <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize: '35px' }}>
                Tu historial de Pedidos
            </h1>
        </div>
        <div>
            <img src={Primer} alt="" onClick={{}} style={{ marginLeft:'17px' }}/>
        </div>
        <div>
            <img src={Segundo} alt="" onClick={{}} style={{ marginLeft:'17px' }}/>
        </div>
        <div>
            <img src={Tercero} alt="" onClick={{}} style={{ marginLeft:'17px' }}/>
        </div>
        <div className=" mt-4 ">
            <img src={volver} alt="" onClick={back} style={{ marginLeft:'160px' }}/>
        </div>


        


        
        </div>
    )
    
}