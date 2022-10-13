
import React from 'react';
import icont from "../assets/images/Pagos/iconTarjeta.png"
import volver from "../assets/images/volver.png"
import botonA from "../assets/images/Pagos/botonA.png"
import { useNavigate } from "react-router-dom"

export const Agregartarjeta = () => {

    const navigate = useNavigate();

    const back=()=>{
        navigate("/MetodoPago")
    }
    return (
        <>
        <div className="header mt-6 ms-2 mx-auto">
            <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize: '35px' }}>
                Agregar tarjeta
            </h1>
        </div>
        <div>
            <img src={icont} alt=""  style={{ marginLeft:'60px', marginTop:'-60px', marginBottom:'-20px' }}/>
        </div>
        <div className='ms-2'>
            <h1 className='fw-regular' style={{color:'#8A68A5', fontSize: '20px' }}>
                Número de la tarjeta
            </h1>
            <input class="form-control" type="text" placeholder="" aria-label="default input example" style={{color:'#8A68A5', fontSize: '18px' }}></input>
        </div>
        <div className='ms-2 mt-1'>
            <h1 className='fw-regular' style={{color:'#8A68A5', fontSize: '20px' }}>
                Nombre del titular
            </h1>
            <input class="form-control" type="text" placeholder="" aria-label="default input example" style={{color:'#8A68A5', fontSize: '18px' }}></input>
        </div>
        <div className='row mt-1 ms-1'>
            <div className='col-5 '>
                <h1 className='fw-regular' style={{color:'#8A68A5', fontSize: '20px' }}>
                    Fecha vencimiento
                </h1>
                <input class="form-control" type="text" placeholder="" aria-label="default input example" style={{color:'#8A68A5', fontSize: '18px' }}></input>
            </div>
            <div className='col-5 mt-4 ms-5'>
                <h1 className='fw-regular' style={{color:'#8A68A5', fontSize: '20px' }}>
                    CVV
                </h1>
                <input type="password" class="form-control" id="inputPassword"/>
            </div>
        </div>
        <div>
            <img src={botonA} alt="" onClick={back} style={{ marginLeft:'55px'}}/>
        </div>
        <div className=" mt-4 ">
            <img src={volver} alt="" onClick={back} style={{ marginLeft:'160px', marginTop:'-40px' }}/>
        </div>
    </>
    );
}

