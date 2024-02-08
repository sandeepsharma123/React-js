import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Product() {
    const location=useLocation();
  return (
    <div style={{marginTop: '10%'}}>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
                <img src={location.state.image} alt='' style={{width: "100%", height: "450px"}}/>
        </div>
        <div className='col-lg-6 border py-2'>
        <h4><b>Description:</b>{location.state.description}</h4>
        <h5><b>Price:</b>{location.state.price}$</h5>
        <button>+</button>
        <input type='Number'/>
        <button>-</button><br></br>
        <button className='btn btn-success my-2'>Buy Now</button>
        </div>
    </div>
      </div>
    </div>
  )
}
