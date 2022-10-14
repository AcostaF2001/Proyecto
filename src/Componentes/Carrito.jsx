import React from 'react'
import './Carrito.scss'
import { useNavigate } from 'react-router-dom'
import carrito from 'assets/images/Carrito/carrito2.png'
import pagar from 'assets/images/Carrito/bpagar.png'



export const Carrito = ({toggleCarrito}) => {

    const navigate=useNavigate()

    const irpago=()=>{
        navigate("/MetodoPago")
    }
    
    
   

    return (
        <div className={`carrito animate__animated ${toggleCarrito ? 'animate__fadeInUp': 'animate__fadeOutDown' } `}>
            <div className='row py-4'>
                
                <div className='col-7'>
                <h1 className='fw-bold' style={{color: '#8A68A5',fontSize: '25px', marginLeft:'25px'}}>
                    Tu carrito
                </h1>
                </div>
                <div className='col-3 ' >
                <h1 className='fw-regular' style={{color: '#8A68A5',fontSize: '23px', marginLeft:'15px', marginTop:'2px'}}>
                    Vaciar</h1>
                </div>
            </div>
            <div className='line d-flex align-items-start'/>
            <div className='middle pb-6 pt-7 px-5'>
                <img src={carrito} alt="" style={{paddingLeft:'130px', marginTop:'20px', paddingBottom:'10px'}} />
                <h1 className='fw-regular' style={{color: '#8A68A5',fontSize: '23px', marginLeft:'15px', marginTop:'2px'}}>
                    Aun no tienes productos</h1>
            </div>
            <div className='bottom'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={pagar} alt="" onClick={irpago} />

                    </div>
                    <div className='col'>
                        <div className='row pt-4 px-3'>
                            <div className='col'>
                                <h1 className='fw-bold' style={{color: '#ffff',fontSize: '25px', marginLeft:'25px'}}>
                                Total:
                                </h1>
                            </div>
                            <div className='col'>
                                <h1 className='fw-regular' style={{color: '#ffff',fontSize: '25px', paddingLeft:'25px'}}>
                                0 $
                                </h1>
                            </div>
                        </div>
                        <div className='col'>
                            <h1 className='fw-regular' style={{color: '#ffff',fontSize: '22px',  paddingLeft:'45px'}}>
                            Productos: 0
                            </h1>
                        </div>

                    </div>

                </div>

            </div>
        </div>
      )

}