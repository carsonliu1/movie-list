import React from 'react';

var Movie = ({movie, toggleWatch}) => {

  const styling = () => {
    return {
      padding: '20px',
      paddingTop: '10px',
      paddingLeft : '20px',
      borderStyle: 'solid',
      height: '30px',
      borderColor: '#E7E9EB',
      borderWidth: 'thin'
    }
  }

  const toBeWatched = (movie) => {
    if (!movie.watched) {
      return movie.title
    } else {
      return movie.title
    }
  }


  return (
    <div style={styling()}>
      <ul>
        {toBeWatched(movie)}
        <button
          style={{float:'right'}}
          value={movie.title}
          onClick={toggleWatch.bind(this,movie.title)}
        >
          Watched
        </button>
      </ul>
    </div>
  )
}


export default Movie