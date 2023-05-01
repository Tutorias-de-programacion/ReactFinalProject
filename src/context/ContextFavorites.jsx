import React, {useContext, useEffect, useReducer} from "react";

const FavoriteContext = React.createContext();

const useFavoriteContext = ()=>{
    return useContext(FavoriteContext)
}

// const favoriteMovies=[
//     {id: 82792,
//         main_poster
//         : 
//         "http://image.tmdb.org/t/p/w500/th8c4sGS5ZAOW7zhyGWyhykuL0M.jpg",
//         overview
//         : 
//         "Mario \"Cantinflas\" Moreno is a hired hand, Pepe, employed on a ranch. A boozing Hollywood director buys a white stallion that belongs to Pepe's boss. Pepe, determined to get the horse back (as he considers it his family), decides to take off to Hollywood. There he meets film stars including Jimmy Durante, Frank Sinatra, Zsa Zsa Gabór, Bing Crosby, Maurice Chevalier and Jack Lemmon in drag as Daphne from Some Like It Hot. He is also surprised by things that were new in America at the time, such as automatic swinging doors. When he finally reaches the man who bought the horse, he is led to believe there is no hope of getting it back. However, the last scene shows both him and the stallion back at the ranch with several foals."
//         ,title
//         : 
//         "Pepe"
//         ,votes
//         : 
//         {vote_average: 6.2, vote_count: 36},
//        },
//         {
//             id
// : 
// 538620
// ,main_poster
// : 
// "http://image.tmdb.org/t/p/w500/awSwUBuCLrnWTZKN5H6gnW8qF3c.jpg"
// ,overview
// : 
// "A documentary on the life of Uruguayan politician and former guerrilla fighter José Mujica."
// ,title
// : 
// "El Pepe, una vida suprema"
// ,votes
// : 
// {vote_average: 7.325, vote_count: 40}
//         },
//         {
//             id
// : 
// 126963
// ,main_poster
// : 
// "http://image.tmdb.org/t/p/w500/nxZEdYcHMuD8SSuwusDnK9CD2H1.jpg"
// ,overview
// : 
// "The events of Battle of Gods take place some years after the battle with Majin Buu, which determined the fate of the entire universe. After awakening from a long slumber, Beerus, the God of Destruction is visited by Whis, his attendant and learns that the galactic overlord Frieza has been defeated by a Super Saiyan from the North Quadrant of the universe named Goku, who is also a former student of the North Kai. Ecstatic over the new challenge, Goku ignores King Kai's advice and battles Beerus, but he is easily overwhelmed and defeated. Beerus leaves, but his eerie remark of \"Is there nobody on Earth more worthy to destroy?\" lingers on. Now it is up to the heroes to stop the God of Destruction before all is lost."
// ,title
// : 
// "ドラゴンボールZ 神と神"
// ,votes
// : 
// {vote_average: 6.797, vote_count: 1342}
//         },
//         {
//             id
// : 
// 303857
// ,main_poster
// : 
// "http://image.tmdb.org/t/p/w500/soq3AxjALdBfdPAm8H7yuMmNL5Y.jpg"
// ,overview
// : 
// "One peaceful day on Earth, two remnants of Frieza's army named Sorbet and Tagoma arrive searching for the Dragon Balls with the aim of reviving Frieza. They succeed, and Frieza subsequently seeks revenge on the Saiyans."
// ,title
// : 
// "ドラゴンボールZ 復活の「F」"
// ,votes
// : 
// {vote_average: 6.812, vote_count: 1632}
//         }
// ];

const memory = localStorage.getItem('favorite')
const favoriteMovies = memory ? JSON.parse(memory) :[]  

console.log(memory)





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
            return state
        };
    }
}



const FavoriteProvider =({children})=>{
    const [state, dispatch]= useReducer(reducer,favoriteMovies)
    console.log(state)
    return (
        <FavoriteContext.Provider value={{favoriteMovies: state, dispatch}}>
            {children}
        </FavoriteContext.Provider>
    )
}


export {FavoriteProvider,useFavoriteContext};