import React from 'react';
import volver from "../assets/images/volver.png"
import iconN from "../assets/images/Pagos/iconNequi.png"
import botonN from "../assets/images/Pagos/botonN.png"
import { useNavigate } from "react-router-dom"

export const AgregarNequi = () => {

    const navigate = useNavigate();

    const back=()=>{
        navigate("/MetodoPago")
    }

    return (
        <>
        <div className="header mt-6 ms-2 mx-auto">
            <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize: '35px' }}>
                Vincular Nequi
            </h1>
        </div>
        <div>
            <img src={iconN} alt=""  style={{ marginLeft:'260px', marginTop:'-100px', marginBottom:'10px'}}/>
        </div>
        <div className='ms-2'>
            <h1 className='fw-regular' style={{color:'#8A68A5', fontSize: '20px' }}>
                Número de celular asociado
            </h1>
            <input class="form-control" type="text" placeholder=" " aria-label="default input example" style={{color:'#8A68A5', fontSize: '18px' }}></input>
        </div>
        <div className='ms-2 mt-2'>
            <h1 className='fw-regular' style={{color:'#8A68A5', fontSize: '20px' }}>
                Nombre del titular
            </h1>
            <input class="form-control" type="text" placeholder=" " aria-label="default input example" style={{color:'#8A68A5', fontSize: '18px' }}></input>
        </div>
        <div className='ms-2 mt-2'>
            <h1 className='fw-regular' style={{color:'#8A68A5', fontSize: '20px' }}>
                Email asociado
            </h1>
            <input class="form-control" type="text" placeholder=" " aria-label="default input example"style={{color:'#8A68A5', fontSize: '18px' }}></input>
        </div>
        
        
        <div className='ms-2 mt-2'>
            <h1 className='fw-regular' style={{color:'#8A68A5', fontSize: '20px' }}>
                Número de identificación
            </h1>
            <select className="form-select" aria-label="Default select example" style={{color:'#8A68A5', fontSize: '20px' }}>
                <option selected>Tipo de documento</option>
                <option value="1">Cedula</option>
                <option value="2">Cedula de extranjeria</option>
                <option value="3">Pasaporte</option>
                <option value="4">Otro</option>
            </select>
            <input class="form-control mt-2" type="text" placeholder=" " aria-label="default input example" style={{color:'#8A68A5', fontSize: '18px' }}></input>
        </div>
        <div class="form-check mt-2 ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault" style={{color:'#8A68A5', fontSize: '18px' }}>
                Acepto los términos y condiciones
            </label>
        </div>
        <div>
            <img src={botonN} alt="" onClick={back} style={{ marginLeft:'38px'}}/>
        </div>
        <div >
            <img src={volver} alt="" onClick={back} style={{ marginLeft:'160px', marginTop:'-10px' }}/>
        </div>
        </>
    );
}


