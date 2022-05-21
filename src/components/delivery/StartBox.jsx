import React from 'react'
import plus from "../../images/svg/pluschoice.svg"


export default function StartBox() {
  return (
    <div className='select-box'>
    <h2>Start Delivery</h2>
    <div className='imgbox'>
      <img src={plus} alt={plus}/>
    </div>
  </div>
  )
}