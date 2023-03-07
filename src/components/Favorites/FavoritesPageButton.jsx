import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./favorites.css";

function FavoritesPageButton() {

  return (  
    <div className="starContainer">

      <Link to="./favorites" relative="route">
        <AiFillStar className="navText starIco" size={"2em"} s/>
      </Link>
    </div>

  );
}

export default FavoritesPageButton;
