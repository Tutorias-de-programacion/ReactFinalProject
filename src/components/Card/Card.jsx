import React from 'react'
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useFavoriteContext } from '../../context/ContextFavorites';


const Card = ({title, url,id,favorite=false}) => {

  const {dispatch} = useFavoriteContext();

  const removeMovie = ()=>{
    dispatch({
      type:"REMOVE_FAVORITE",
      value:id
    })
  }

  return (
    <div className={style.card_complete}>

    <Link to={`../movie/${id}`} relative="route"> 
     <div className={style.card_container}>
        {url && <img alt={title} className={style.card_img} src={url}/>}
     </div>
    </Link>
      <div className={style.button}>
      {favorite && 
      <button onClick={removeMovie} type="button" class="btn btn-outline-danger">Remove
      </button>}
      </div>
    </div>
    
  )
}



export default Card