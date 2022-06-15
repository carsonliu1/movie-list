import React from 'react';
import Movie from './Movie.jsx'

var MovieList = ({list, toggleWatch, clickHandler}) => {
  const movieSearch = function(list) {
    // if (typeof list.searchList === 'string' ) {
    //   return [list.searchList]
    // }
    if (list.found) {
      return list.searchList.map(ele => <Movie movie={ele} toggleWatch={toggleWatch}/>)
    } else {
      return list.movies.map(ele => <Movie movie={ele} toggleWatch={toggleWatch}/>)
    }
  }

  return (
    <div>
      <button value='watched' onClick={clickHandler}>Watched</button>
      <button value='toWatch' onClick={clickHandler}>To Watch</button>
      {movieSearch(list)}
    </div>
  )
}




export default MovieList