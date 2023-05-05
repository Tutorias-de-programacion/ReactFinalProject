import React from "react";
import { useFavoriteContext } from "../../context/ContextFavorites";
import Card from "../../components/Card/Card";
import styles from "./favorites.module.css"


const FavoritesPage = () => {

    const {favoriteMovies } = useFavoriteContext();

    return (
    <div className={styles.body}>
        <h1>These are your favorites movies</h1>
        {favoriteMovies.length <= 0 ? 
        <div className={styles.empty}>
        <h2>You have not added any movies to favorites.</h2>
        <h2>please add some</h2>
    </div>:

<div className={styles.cards_list}>
{favoriteMovies.length >= 0 && favoriteMovies.map((movie)=>{
          return <Card
          title={movie.title}
          key={movie.id}
          url={movie.main_poster}
          id={movie.id}
          favorite={true}
          />
      })}
</div>
    }
        
        
    </div>
    );
}
 
export default FavoritesPage