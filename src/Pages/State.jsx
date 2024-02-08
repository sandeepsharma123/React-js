import React, { useState } from 'react'

export default function State() {
    const [data,setdata]=useState(0);
    const changeData=()=>{
        setdata(data+1)
        
}
    const changeData2=()=>{
        setdata(data-1)
    }
  return (
    <div style={{marginTop:"10%"}}>
      <h1>{data}</h1>
      <button onClick={changeData}>+</button>
      <button onClick={changeData2}>-</button>
    </div>
  )
}
