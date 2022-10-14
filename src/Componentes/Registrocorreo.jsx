import { UserAuth2 } from '../Firebase/CorreoAuth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { async } from '@firebase/util';
import Logo from "../assets/images/logo.png"

export const Registrocorreo=()=> {

  

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const {createUser2} = UserAuth2();
    const navigate= useNavigate();

    const Handlesubmit= async(e)=>{
      e.preventDefault()
      setError('')
      try{
        await createUser2(email, password)
        navigate('/gps')

      }catch(e){
        setError(e.message)
        console.log(e.message)
      }

      
    }

  return(
    <div className="bg-3 px-2 pb-6 pt-3">
        <div >
          <div className="header  ms-3 mx-auto">
            <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize: '50px' }}>Registrate</h1>
          </div>

        </div>


        <form onSubmit={Handlesubmit} className="mt-5">
        <div className="mb-3">
            <label for="exampleInputEmail1" style={{color: '#8A68A5'}} className="form-text ms-5 mt-5 ">Correo Electronico</label>
            <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control w-75 mx-auto mb-3"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div  id="emailHelp" style={{color: '#8A68A5'}} className="form-text ms-5 ">Nunca compartas tu correo con otras personas</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" style={{color: '#8A68A5'}} className="form-text ms-5 ">Contraseña</label>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control w-75 mx-auto mb-3"  id="exampleInputPassword1"/>
        </div>
        <div className="d-grid gap-2 d-md-block mb-5">
          <button type="submit" style={{color: '#8A68A5'}} className="btn btn-primary m-auto">Confirmar</button>
        </div>
        
        </form>
        <p className="text-center  " style={{color: '#8A68A5'}}>Ya tienes una cuenta? <Link to='/Login' className="underline">Inicia Sesion.</Link> </p>
    </div>
)
}
