import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { UserAuth2 } from '../Firebase/CorreoAuth';
import Logo from "../assets/images/logo.png"
export const Logincorreo=() =>{

 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const {signIn}=UserAuth2();
 

    const handlesubmit= async(e)=>{
        e.preventDefault()
        setError('')
        try{
            await signIn(email,password)
            navigate('/gps')
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }

    return(
        <div className="bg-3 px-2 pb-7">
            <div className="fondo d-flex flex-column justify-content-center">
                <div className="header mt-6 mx-auto">
                <img src={Logo} alt="" />
                </div>
               
            </div>
            <div>
                
            </div>
            
            <form onSubmit={handlesubmit}>
            <div className="mt-5">   

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" style={{color: '#8A68A5'}} className="form-label ms-5 ">Correo Electronico</label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control w-75 mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" style={{color: '#8A68A5'}} className="form-text ms-5 ">Nunca compartas tu correo con otras personas</div>
                </div>
                <div className="mb-3" >
                    <label htmlFor="exampleInputPassword1" style={{color: '#8A68A5'}} className="form-label text-center ms-5 ">Contraseña</label>
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control w-75 mx-auto mb-3" id="exampleInputPassword1"/>
                </div>

            </div>
           

            <div className="d-grid gap-2 d-md-block mb-5">
                <button type="submit" style={{color: '#8A68A5'}} className="btn btn-primary m-auto">Iniciar Sesión</button>
            </div>
            <p className="text-center  " style={{color: '#8A68A5'}}>No tienes Cuenta Aun? <Link to='/Registro' className="underline">Registrate.</Link> </p>
            </form>
        </div>
    )
}