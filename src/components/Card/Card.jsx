import React from 'react'
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({title, url,id}) => {
  return (
    <Link to={`../movie/${id}`} relative="route"> 
     <div className='card_container'>
        {url && <img alt={title} className='card_img' src={url}/>}
     </div>
    </Link>
    
  )
}



export default Card