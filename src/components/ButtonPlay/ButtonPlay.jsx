import React from 'react'
import { useEffect } from 'react';
import './ButtonPlay.css'
// import Button from "react-bootstrap/Button";
import {GrPlayFill } from "react-icons/gr";


const ButtonPlay = () => {

  const toPlay = ()=>{
    alert("We can't play the movie.")
  }
  return (
    <button onClick={toPlay} className={`button_play`}>
    <GrPlayFill className='icon'/>
    <div className='play_text'>Play</div>
    </button>
  )
}

export default ButtonPlay
