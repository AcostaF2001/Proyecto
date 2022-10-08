import { UserAuth2 } from '../Firebase/CorreoAuth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { async } from '@firebase/util';

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
        navigate('/home')

      }catch(e){
        setError(e.message)
        console.log(e.message)
      }

      
    }

  return(
    <>
        <h1>Registro</h1>
        <p>Ya tienes una cuenta? <Link to='/Login' className="underline">Inicia Sesion.</Link> </p>
        <form onSubmit={Handlesubmit}>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Correo Electronico</label>
            <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div  id="emailHelp" className="form-text">Nunca compartas tu correo con otras personas</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Confirmar</button>
        </form>
    </>
)
}
