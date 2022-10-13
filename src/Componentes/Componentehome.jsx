import { useState } from "react"
import { Componentgps } from "./Componentegps"
import { Componentecat } from "./Componentecat"
import { Componentemenu } from "./Componentemenu"
import { Componenteayuda } from "./Componenteayuda"
import { Componentebusqueda } from "./Componentebusqueda"
import user from "../assets/images/usuario.png"
import menuTabs from "../assets/images/Menú.png"
import ubic from "../assets/images/ubicacion.png"
import lupa from "../assets/images/lupa.png"
import rest from "../assets/images/Home/Restaurantes.png"
import far from "../assets/images/Home/Farmacias.png"
import fav from "../assets/images/Home/Favoritos.png"
import sup from "../assets/images/Home/supermercados.png" 
import Helper from "../assets/images/Login/helper.png"
import { useNavigate } from "react-router-dom"

export const Componenthome = () =>{
    const navigate = useNavigate();


    const restaurantes =()=>{
        navigate("/Restaurantes")
    }
    
    return(
        <>
        <div className="header-home mt-5  ">
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
                    <img src={menuTabs} alt="" className="ms-5 w-1 pt-3"/>
                </div>
            </div>
            <div class="input-group input-group-sm mb-3  ">
                <span class="input-group-text" id="inputGroup-sizing-sm"><img src={lupa} alt="" className="w-75" /></span>
                <input type="text" className="form-control" aria-label="Sizing example input" placeholder="Que quieres pedir hoy?" aria-describedby="inputGroup-sizing-sm"/>
            </div>
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
        <div className="row mt-5">
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
        </>
    )
}