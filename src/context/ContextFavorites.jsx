import React, {useContext, useEffect, useReducer, useState} from "react";

const FavoriteContext = React.createContext();

const useFavoriteContext = ()=>{
    
    return useContext(FavoriteContext)
}
const memory = localStorage.getItem('favorites')
const initialState = memory ? JSON.parse(memory) :[] 

const reducer = (state, action)=>{
    switch(action.type){
        
        case "ADD_FAVORITE":{
            const newState = [...state,action.value.movie]
            localStorage.setItem("favorites", JSON.stringify(newState))
            return newState;
           
        };
        case "REMOVE_FAVORITE":{
            const newState = state.filter(element => element.id != action.value)
            localStorage.setItem("favorites", JSON.stringify(newState))
            
            return newState;
        };
        default :{
            throw new Error();
        };
    }
}



const FavoriteProvider =({children})=>{
    const [state, dispatch]= useReducer(reducer,initialState)
    return (
        <FavoriteContext.Provider value={{favoriteMovies: state, dispatch}}>
            {children}
        </FavoriteContext.Provider>
    )
}


export {FavoriteProvider,useFavoriteContext};