
import React from 'react';
import head from "../assets/images/Ayuda/headchat.png"
import chat from "../assets/images/Ayuda/campochat.png"
import volver from "../assets/images/volver.png"
import { useNavigate } from "react-router-dom"

export const Componenteayuda = () => {

    const navigate = useNavigate();

    const back=()=>{
        navigate("/home")
    }

    return (
        <>
        <div className="header mt-6 ms-2 mx-auto">
            <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize: '35px' }}>
                Contáctate con nosotros
            </h1>
        </div>
        <div>
            <img src={head} alt=""  style={{ marginLeft:'-12px', marginTop:'-30px', width:'106%' }}/>
        </div>
        <div>
            <img src={chat} alt=""  style={{  marginTop:'-10px', marginLeft:'20px',  width:'90%' }}/>
            <div className='col-8 ms-4 mt-n2 position-relative'>
            <input class="form-control form-control-lg" type="text" placeholder="Escribe tu mensaje"
             aria-label=".form-control-lg example"  />
            </div>
        </div>
        <div className=" mt-4 ">
            <img src={volver} alt="" onClick={back} style={{ marginLeft:'160px' }}/>
        </div>
        </>
    );
}


