import { Establecimiento } from "./Establecimiento"
import ubic from "../assets/images/ubicacion.png"
import menuTabs from "../assets/images/Menú.png"
import carrito from "../assets/images/Restaurantes/Carrito.png"
import Ajus from "../assets/images/Restaurantes/Ajustes.png"
import Mcd from "../assets/images/Restaurantes/mcdonals.png"
import kfc from "../assets/images/Restaurantes/KFC.png"
import qbano from "../assets/images/Restaurantes/qbano.png"
import corral from "../assets/images/Restaurantes/corral.png"
import frisby from "../assets/images/Restaurantes/frisby.png"
import Wok from "../assets/images/Restaurantes/Sr.wok.png"
import btn from "../assets/images/Restaurantes/Botonees.png"
import promo from "../assets/images/Restaurantes/Promociones.png"
import volver from "../assets/images/volver.png"
import lupa from "../assets/images/lupa.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Carrito } from "./Carrito"
import  "assets/styles/global.scss"
import ListaDirecciones from "Componentes/ListaDirecciones"
export const Restaurantes =({Restaurantes}) =>{

    const navigate = useNavigate();

    const [showCarrito, setShowCarrito] = useState(false);
    const [toggleCarrito, setToggleCarrito] = useState(false);

    const handleToggleCarrito = () => {
        setToggleCarrito( false )
        setTimeout( () => {
            setShowCarrito(false)
        }, 1000)
    }

    const [showDir, setShowDir] = useState(false);
    const [toggleDir, setToggleDir] = useState(false);

    const handleToggleDir = () => {
        setToggleDir( false )
        setTimeout( () => {
            setShowDir(false)
        }, 1000)
    }

    const restaurante=()=>{
        navigate("/Restaurante")
    }

    const back=()=>{
        navigate("/home")
    }
    return(
        <div className='bg-1 py-5 px-2'>
            { 
            showCarrito && 
            <>
                <Carrito toggleCarrito={toggleCarrito} />
                <div className="overlay" onClick={() => handleToggleCarrito()}></div>
            </>
        }
        { 
            showDir && 
            <>
                <ListaDirecciones toggleDir={toggleDir} />
                <div className="overlay" onClick={() => handleToggleDir()}></div>
            </>
        }
            <div>
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex p-2 mt-3 " onClick={() => { setShowDir(true); setToggleDir(true) } }>
                            <img src={ubic} alt="" className="ms-1" style={{width:'12%', height:'12%',marginTop:'1px' }}/>                
                            <h1 className='fw-regular' style={{color: '#FFFFFF',fontSize: '20px', marginLeft:'2px' }}>Carrera 44 #6b-95</h1>
                        </div>
                    </div>
                    <div className="col">
                        <img onClick={() => { setShowCarrito(true); setToggleCarrito(true) } } src={carrito} alt="" className="ms-3 w-75 pt-2"/>
                    </div>
                    <div className="input-group input-group-sm  mt-3 ">
                        <input type="text" className="form-control input-search" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{color:'#8A68A5', fontSize: '18px' }} placeholder="¿Qué quieres pedir hoy?"/>           
                    </div>
                </div>
            </div>

            <div  className="d-flex p-2 mt-n4  ">
                <img src={Ajus} alt="" />
                <h1 className='fw-regular ' style={{color: '#8A68A5',fontSize: '18px', marginLeft:'-8px',marginTop:'35px', }}>Ajustes de Busqueda</h1>
            </div>

            <div>
                <h1 className='fw-regular ' style={{color: '#8A68A5',fontSize: '18px', marginLeft:'30px',}}>Restaurantes</h1>
                <div style={{background: '#8A68A5', marginLeft:'30px',width:'80%',height:'2px',marginTop:'-2px'}}></div>
            </div>

            <div >
            <div className="row">
                <div className="col-3 ms-3 mt-4">
                    <img src={Mcd} alt="" onClick={restaurante}  />
                </div>
                <div className="col-3 ">
                    <img src={kfc} alt=""onClick={restaurante}  style={{marginTop:'-17px', marginLeft:'-18px'}} />
                </div>
                <div className="col-3">
                    <img src={qbano} alt="" onClick={restaurante}  style={{marginTop:'20px', marginLeft:'18px'}} />
                </div>
            </div>
            <div className="row">
                <div className="col-3  ms-3 mt-4 ">
                    <img src={corral} onClick={restaurante}  alt="" />
                </div>
                <div className="col-3">
                    <img src={frisby} alt="" onClick={restaurante}  style={{marginTop:'30px', marginLeft:'17px'}} />
                </div>
                <div className="col-3">
                    <img src={Wok} alt="" onClick={restaurante} style={{marginTop:'-20px', marginLeft:'8px'}} />
                </div>
            </div>

            <div className="mt-3">
                <img src={btn} alt=""style={{ marginLeft:'120px'}} />
            </div>

            <div>
                <img src={promo} alt="" style={{ marginLeft:'75px'}}/>
            </div>
            
            <div className=" mt-1 ">
                <img src={volver} alt="" onClick={back} style={{ marginLeft:'160px'}}/>
            </div>

        </div>
    
        </div>
    )
}