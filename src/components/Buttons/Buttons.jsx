import React from 'react'
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite'
import ButtonPlay from '../ButtonPlay/ButtonPlay'
import "./buttons.css"

const Buttons = (movie) => {
  return (
    <div className='buttons_content'>
        <div>
            <ButtonPlay/>
        </div>
        <div>
            <ButtonFavorite text={true} movie={movie}/>
        </div>
    </div>
  )
}

export default Buttons