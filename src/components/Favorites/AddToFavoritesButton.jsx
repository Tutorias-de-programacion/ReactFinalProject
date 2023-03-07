import React from "react";
import Button from "react-bootstrap/Button";
import { AiFillStar } from "react-icons/ai";

function AddToFavoritesButton() 
{
    
  return (
    <Button variant="dark" className="txtColor">
      <AiFillStar className="navText" />
    </Button>
  );
}

export default AddToFavoritesButton;
