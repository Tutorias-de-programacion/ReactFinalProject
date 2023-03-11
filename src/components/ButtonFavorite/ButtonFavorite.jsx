import React from 'react'
import './buttonFavorite.css'
import { AiFillStar } from "react-icons/ai";


const ButtonFavorite = ({text=false}) => {

  const addFavorite = ()=>{
    alert("add to favorites is not ready.")
  }

  return (
       <button onClick={addFavorite} variant="dark" className="button_favorite">
       <AiFillStar className="navText" />
       {text && <div className='navText'>Add to Favorite</div>}
     </button>
  )
}

export default ButtonFavorite
