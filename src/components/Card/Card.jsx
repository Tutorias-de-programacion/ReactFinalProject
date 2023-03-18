import React from 'react'
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({title, url,id}) => {
  return (
    <Link to={`../movie/${id}`} relative="route"> 
     <div className='card_container'>
               
        {/* {title && <p>{title}</p>} */}
        {url && <img alt={title} className='card_img' src={url}/>}
     </div>
    </Link>
    
  )
}

// to={`movie/${id}`}  to="./" relative="route"
// CORRECT ROUTE 5174/movie/1011679
// USED ROUTE 5174/movie/611694


export default Card