import React from 'react'
import CountUp from 'react-countup'
export default function Factcounter(props) {
  return (
    <>
         <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i className={props.icon}></i>
                    <h1 class="display-4 text-white" data-toggle="counter-up"><CountUp end={1234} /></h1>
                    <span class="fs-5 text-white">{props.name}</span>
                    <hr class="bg-white w-25 mx-auto mb-0"/>
                </div>
    </>
  )
}
