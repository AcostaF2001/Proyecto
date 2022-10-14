import { useState } from "react"
import { Componentgps } from "../Componentegps"
import { Componentecat } from "../Componentecat"
import { Componentemenu } from "../Componentemenu"
import { Componenteayuda } from "../Componenteayuda"
import { Componentebusqueda } from "../Componentebusqueda"
import user from "assets/images/usuario.png"
import menuTabs from "assets/images/Menú.png"
import ubic from "assets/images/ubicacion.png"
import lupa from "assets/images/lupa.png"
import rest from "assets/images/Home/Restaurantes.png"
import far from "assets/images/Home/Farmacias.png"
import fav from "assets/images/Home/Favoritos.png"
import sup from "assets/images/Home/supermercados.png" 
import Helper from "assets/images/Login/helper.png"
import  "assets/styles/global.scss"
import { useNavigate } from "react-router-dom"
import { Menu } from "./Menu"
import "./Home.scss"

export const Home = () =>{

    const [showMenu, setShowMenu] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu( false )
        setTimeout( () => {
            setShowMenu(false)
        }, 1000)
    }

    const navigate = useNavigate();

    const restaurantes =()=>{
        navigate("/Restaurantes")
    }
    const help=()=>{
        navigate("/Ayuda")
    }
    
    return(
        <div className="bg-3 py-5 px-2">
        { 
            showMenu && 
            <>
                <Menu toggleMenu={toggleMenu} />
                <div className="overlay" onClick={() => handleToggleMenu()}></div>
            </>
        }
        
        <div className="header-home mt-4">
            <div className="row">
                <div className="col-2 justify-content-center">
                    <img src={user} alt="" className="ms-1 w-90 "/>
                </div>
                <div className="col-6">
                    <div className="d-inline-flex p-2 pt-3  ">
                        <h1 className='fw-regular' style={{color: '#FFFFFF',fontSize: '17px', marginLeft:'10px' }}>¡Bienvenida!</h1>
                        
                        <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize: '17px', marginLeft:'5px' }}>Isabella</h1>
                    </div>
                    <div className="d-inline-flex p-2 mt-n1 ">
                        <img src={ubic} alt="" className="ms-1" style={{width:'12%', height:'12%',marginTop:'1px' }}/>                
                        <h1 className='fw-regular' style={{color: '#FFFFFF',fontSize: '12px', marginLeft:'2px' }}>Carrera 44 #6b-95</h1>
                    </div>
                </div>
                <div className="col">
                    <img onClick={() => { setShowMenu(true); setToggleMenu(true) } } src={menuTabs} alt="" className="ms-5 w-1 pt-3"/>
                </div>
            </div>
            <div className="input-group input-group-sm mb-3 px-3  ">
                <input type="text" className="form-control input-search" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{color:'#8A68A5', fontSize: '18px' }} placeholder="¿Qué quieres pedir hoy?"/>            
            </div>
        <div >
            <div className="row">
                <div className="col-5">
                    <img src={rest} alt="" onClick={restaurantes}/>
                </div>
                <div className="col-5">
                    <img src={sup} alt="" onClick={restaurantes}/>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <img src={far} alt="" onClick={restaurantes}/>
                </div>
                <div className="col-5">
                    <img src={fav} alt="" onClick={restaurantes}/>
                </div>
            </div>
        </div>
        <div className="row mt-5" onClick={help}>
                <div className="col-2">
                    <img src={Helper} alt="" />
                </div>
                <div className="col-10">
                    <div className="help text-center">
                        <span>
                            ¿Necesitas ayuda? Contáctate con nosotros.
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}