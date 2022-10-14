import Helper from "../assets/images/Login/helper.png"
import tarjeta from "../assets/images/Pagos/tarjeta.png"
import nequic from "../assets/images/Pagos/nequi.png"
import davic from "../assets/images/Pagos/daviplata.png"
import volver from "../assets/images/volver.png"
import { useNavigate } from "react-router-dom"
export const ComponenteMetodopago=()=>{

    const navigate = useNavigate();


    const card =()=>{
        navigate("/AgregarTarjeta")
    }
    const nequi =()=>{
        navigate("/Nequi")
    }
    const davi =()=>{
        navigate("/Daviplata")
    }
    const back=()=>{
        navigate("/home")
    }
    const help=()=>{
        navigate("/Ayuda")
    }

    return(
        
        <div className="bg-1 px-2 pb-6 pt-2">
        <div className="header2 mt-2 ms-2 mx-auto">
            <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize: '35px' }}>
                Agregar método de pago
            </h1>
        </div>
        <div>
            <img src={tarjeta} alt="" onClick={card} style={{ marginLeft:'17px' }}/>
        </div>
        <div>
            <img src={nequic} alt="" onClick={nequi} style={{ marginLeft:'17px' }}/>
        </div>
        <div>
            <img src={davic} alt="" onClick={davi} style={{ marginLeft:'17px' }}/>
        </div>
        <div className="row mt-4" onClick={help}>
                <div className="col-2">
                    <img src={Helper} alt=""  />
                </div>
                <div className="col-10">
                    <div className="help text-center"   >
                        <span>
                            ¿Necesitas ayuda? Contáctate con nosotros.
                        </span>
                    </div>
                </div>
        </div>
        <div className=" mt-4 ">
            <img src={volver} alt="" onClick={back} style={{ marginLeft:'160px' }}/>
        </div>


        


        
        </div>
    )
}