import React from 'react'
import './Carrito.scss'
import imageUser from 'assets/images/usuario.png'
import Pedidos from 'assets/images/Pedidos.png'
import Pago from 'assets/images/Pago.png'
import Help from 'assets/images/Help.png'
import Cerrar from 'assets/images/Cerrar.png'
import { useNavigate } from 'react-router-dom'
import volver from 'assets/images/Carrito/Volver2.png'
import carrito from 'assets/images/Carrito/carrito2.png'
import pagar from 'assets/images/Carrito/bpagar.png'

export const Carrito = ({toggleCarrito}) => {

    const navigate=useNavigate()

    return (
        <div className={`carrito animate__animated ${toggleCarrito ? 'animate__slideInRight': 'animate__slideOutRight' } `}>
            <div className='row py-4'>
                <div className='col-3 '>
                    <img src={volver} alt="return" style={{marginLeft:'20px'}} />
                </div>
                <div className='col-5'>
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
                        <img src={pagar} alt="" />

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
                                0$
                                </h1>
                            </div>
                        </div>
                        <div className='col'>
                            <h1 className='fw-regular' style={{color: '#ffff',fontSize: '25px'}}>
                            Productos: 0
                            </h1>
                        </div>

                    </div>

                </div>

            </div>
        </div>
      )

}