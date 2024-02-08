import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Api() {
    const navigate=useNavigate();
    const[data,setdata]=useState([]);

   
    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((res)=>{   
            return res.json();
        }).then((data)=>{
            setdata(data.products);
        })
    },[data])
    const viewnow=(image,description,price)=>{
      navigate('/Product',{state:{
        image:image,
        description:description,
        price:price,

      }}

      )
    }
  return (
    <div style={{marginTop:'10%'}}>
     <div className='container'>
      <div className='row'>
        {data?.map((item)=>(
          <div className='col-lg-4 border'>
            <h2><b>ID:</b>{item.id}</h2>
            <img src={item.images[0]} alt='' style={{width: "100%" , height: "300px"}}/>
            <p><b>Description:</b>{item.description}</p>
            <p><b>Price:</b>{item.price}$</p>
            <button className='btn btn-primary'>Add to Cart</button>
            <button className='btn btn-primary mx-2' onClick={()=>viewnow(
              item.images[0],
              item.description,
              item.price
            )}>View Now</button>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}
