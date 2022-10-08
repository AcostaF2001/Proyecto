import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { UserAuth2 } from '../Firebase/CorreoAuth';
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
            navigate('/home')
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }

    return(
        <>
            <h1>Inicio de Sesion </h1>
            <p>No tienes Cuenta Aun? <Link to='/Registro' className="underline">Registrate.</Link> </p>
            <form onSubmit={handlesubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Correo Electronico</label>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Nunca compartas tu correo con otras personas</div>
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