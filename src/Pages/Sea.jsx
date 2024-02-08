import React, { useState } from 'react'

export default function Sea() {
    const [current, update] = useState("/img/drimage.png");
    const image=()=>{
       update("/img/roadimage.jpeg")
       }
       const pic=()=>{
        update("/img/cartoonimage.jpeg")
       }
       const pic1=()=>{
        update("/img/eyeimage.avif ")
       }
       const pic2=()=>{
        update("/img/cameraimage.jpeg")
       }
       const pic3=()=>{
        update("/img/viewimage.jpeg")
       }
       const pic4=()=>{
        update("/img/about.jpg")
       }
       const pic5=()=>{
        update("/img/team-1.jpg")
       }
  return (
    <div>
      <div className="main" style={{ display: "flex", margin:50 , marginTop: 150}}>
  <div className="subdiv" style={{ width: "50%" }}>
    <h2 style={{ textAlign: "center" }}>Our Services</h2>
    <button onClick={image} style={{ fontStyle: "italic", fontSize: 20 }}>
      Internal Medicine
    </button>
    <hr />
    <h2 style={{ textAlign: "center" }} />
    <button onClick={pic} style={{ fontStyle: "italic", fontSize: 20 }}>Nephrology</button>
    <hr />
    <h2 style={{ textAlign: "center" }} />
    <button onClick={pic1} style={{ fontStyle: "italic", fontSize: 20 }}>
      Preventative Care
    </button>
    <hr />
    <h2 style={{ textAlign: "center" }} />
    <button onClick={pic2} style={{ fontStyle: "italic", fontSize: 20 }}>
      Horomone Therapy
    </button>
    <hr />
    <h2 style={{ textAlign: "center" }} />
    <button onClick={pic3} style = {{ fontStyle: "italic", fontSize: 20 }}>
      IV Nutrition Therapy
    </button>
    <hr />
    <h2 style={{ textAlign: "center" }} />
    <button  onClick={pic4} style={{ fontStyle: "italic", fontSize: 20 }}>
      Weight Management
    </button>
    <hr />
    <h2 style={{ textAlign: "center" }} />
    <button onClick={pic5} style={{ fontStyle: "italic", fontSize: 20 }}>
      Aesthetic Medicine
    </button>
    <hr />
  </div>
  <div
    className="image"
    style={{
      backgroundColor: "#0891ac",
      width: "50%",
      border: "1px solid black"
    }}
    
  >
  {current}
    <img src={current} style={{ marginLeft: 80 }} height="280px" /> 
    <h3 style={{ textAlign: "center", color: "white" }}>What we treat</h3>
    <p style={{ textAlign: "center", color: "white" }}>
      Hashimoto's Thyroiditis / Rheumatoid Arthritis
    </p>
    <p style={{ textAlign: "center", color: "white" }}>
      Inflammatory Bowel Disease (IBD) / Lupus
    </p>
    <button
      style={{
        color: "#01597E!important",
        borderColor: "#0c71c3",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginLeft: 250
      }}
    >
      Learn more
    </button>
  </div>
</div>

    </div>
  )
}
