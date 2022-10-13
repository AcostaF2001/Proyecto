import { Logingoogle } from "../../Componentes/logingoogle"
import { Logincorreo } from "../../Componentes/logincorreo"
import { Componenteayuda } from "../../Componentes/Componenteayuda"
import { useState } from "react"
import Logo from "../../assets/images/logo.png"
import Helper from "../../assets/images/Login/helper.png"
import Email from "../../assets/images/Login/email.png"
import  "./Login.scss"
import GoogleButton from "react-google-button"
import { UserAuth } from "../../Firebase/GoogleAuth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Login=()=>{

    const {googleSignIn,user} =UserAuth();
    const navigate= useNavigate();
    const HandleGoogleSignIn= async()=>{
        try{
            await googleSignIn();
            navigate("./gps")
        }catch(error){
            console.log(error)
        }
    }

    const RegistrarseCorreo=()=>{
        navigate("./Login")
    }
    const help=()=>{
        navigate("/Ayuda")
    }


    return(
        <>
        <div className="fondo d-flex flex-column justify-content-center">
            <div className="header mt-4 mx-auto">
                <div className="Sombra">
                    <img src={Logo} alt="" />
                </div>

            </div>

            <div className="d-grid gap-2 d-md-block mb-6">
                <GoogleButton 
                    type="light"
                    label='Inicia con Google'
                    className="mb-5  btn-primary"
                    style={{
                        borderRadius: '10px',
                        color: '#8A68A5',
                        margin: 'auto',
                        height: 'auto',
                        width: '80%',
                        fontSize: '20px',
                        fontWeight: '600',
                        padding: '9px',
                    }}
                    onClick={HandleGoogleSignIn}
                />
                <button className="btn btn-primary m-auto"  onClick={RegistrarseCorreo}>
                    <img src={Email} alt="" className="me-3" />
                    Correo y Contraseña
                </button>
            </div>

            <div className="row" onClick={help} >
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
        
         

        </>
    )

}