import React, { useEffect, useState } from 'react'
import style from './buttonFavorite.module.css'
import { AiFillStar } from "react-icons/ai";
import { useFavoriteContext } from '../../context/ContextFavorites';
import { useParams } from 'react-router-dom';


const ButtonFavorite = ({text=false,movie}) => {

  const {favoriteMovies, dispatch} = useFavoriteContext();
  const[ added,setAdded ]= useState(false)
  const { movieId } = useParams();

  useEffect(()=>{

  },[])

  useEffect(()=>{
    if (favoriteMovies){

      let addedFavorite = favoriteMovies.some(favorite => {
        return favorite.id === movie.movie.id});
  
        if(addedFavorite){
          setAdded(true)
        } else {
          setAdded(false)
        } 

    }
      
  },[movie])

  const addFavorite = ()=>{

  const someMovie = favoriteMovies.some(favorite => {
    return favorite.id === movie.movie.id});

    

 if (!someMovie || !added){
  dispatch({
    type: "ADD_FAVORITE",
    value: movie

  })
  setAdded(true)
 } else {
  dispatch({
    type: "REMOVE_FAVORITE",
    value: movie.movie.id

  })
  setAdded(false)
 }

   
  }

  return (
       <button onClick={addFavorite} variant="dark" className={style.button_favorite}>
       <AiFillStar className={`${style.navText} ${added ? style.starIco : ""}`} />
       { !added && <>
        {text && <div className={`${style.navText} `}>Add to Favorite</div>}
       </>}
       
     </button>
  )
}

export default ButtonFavorite
