import  "../assets/styles/Restaurante.scss"
import lupa from "../assets/images/lupa.png"
import logo from "../assets/images/Restaurante/Logo.png"
import combo from "../assets/images/Restaurante/Combo.png"
import Poke from "../assets/images/Restaurante/Poke.png"
import Menu from "../assets/images/Restaurante/Menu.png"
import volver from "../assets/images/volver.png"
import Fav from "../assets/images/Restaurante/fav.png"
import car from "../assets/images/Restaurante/Car.png"
import { useNavigate } from "react-router-dom"
export const Restaurante =()=>{
    const navigate = useNavigate();

    const back=()=>{
        navigate("/Restaurantes")
    }

    return(
        <div className="bg-2 py-5 px-2" >
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm"><img src={lupa} alt="" className="w-75" /></span>
                <input type="text" className="form-control" aria-label="Sizing example input" placeholder="Que quieres pedir hoy?" aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div>
                <img src={logo} alt=""style={{marginLeft:'175px',marginTop:'20px' }} />
            </div>     
            <div className="mt-3">
                <h1 className='fw-regular ' style={{color: '#8A68A5',fontSize: '18px', marginLeft:'30px',}}>Menú</h1>
                <div style={{background: '#8A68A5', marginLeft:'30px',width:'80%',height:'2px',marginTop:'-2px'}}></div>
            </div>

            <div className="row">
                <div className="col-6 ms-3 mt-4">
                    <h1 style={{color: '#8A68A5',fontSize: '20px', marginLeft:'20px', }}>Menú 1</h1>
                    <p style={{color: '#8A68A5',fontSize: '18px', marginLeft:'20px',marginTop:'-10px'}}>1 Acompañante</p>
                    <p style={{color: '#8A68A5',fontSize: '18px', marginLeft:'20px',marginTop:'-10px'}}>1 base</p>
                    <h1 className='fw-bold' style={{color: '#8A68A5',fontSize: '20px', marginLeft:'20px', }}>$14.500</h1>
                </div>
                <div className="col-3 ">
                    <img src={combo} alt=""style={{marginTop:'30px'}} />
                </div>
            </div>

            <div className="mt-3">
                <h1 className='fw-bold ' style={{color: '#8A68A5',fontSize: '18px', marginLeft:'30px',}}>Descuentos</h1>
                <div style={{background: '#8A68A5', marginLeft:'30px',width:'80%',height:'2px',marginTop:'-2px'}}></div>
            </div>

            <div className="d-flex p-2 mt-3 ">
                <img src={Poke} alt="" className="ms-4" style={{}}/>                
                <img src={Menu} alt="" className="ms-5" />
            </div>
            <div className="d-flex p-2 mt-n2 ">
                <img src={volver} alt="" className="ms-4 mt-3 " onClick={back} style={{width:'15%',height:'15%'}}/>                
                <img src={Fav} alt="" className="ms-1 w-75" />
            </div>

            <div  className="row" style={{width:'100%',height:'100px',background:'#8A68A5',marginLeft:'1px'}}>
                <div className="col-6 ">
                    <img src={car} alt="" />
                </div>
                <div className="col-6">
                    <div className="d-flex p-2">
                        <h1 className='fw-regular' style={{color: '#FFFFFF',fontSize:'20px', marginLeft:'10px',marginTop:'10px',fontWeight:'400'}}>Costo:</h1>
                        <h1 className='fw-bold' style={{color: '#FFFFFF',fontSize:'20px', marginLeft:'10px',marginTop:'10px',}}>$0</h1>
                    </div>
                    <div className="d-flex p-2">
                        <h1 className='fw-regular' style={{color: '#FFFFFF',fontSize:'15px', marginLeft:'10px',marginTop:'-12px',fontWeight:'400'}}>Productos:</h1>
                        <h1 className='fw-regular' style={{color: '#FFFFFF',fontSize:'15px', marginLeft:'10px',marginTop:'-12px',fontWeight:'400'}}>0</h1>
                    </div>
                </div>

            </div>
        
        </div>
    )
}