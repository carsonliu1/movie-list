import React from 'react';
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import UserSubmits from './UserSubmit.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchList:[],
      found: false,
    }
    this.filterMovies = this.filterMovies.bind(this)
    this.addMovie = this.addMovie.bind(this)
    this.toggleWatch = this.toggleWatch.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = (e) => {
    if (e.target.value === 'watched') {
      let movieCopy = this.state.movies.slice()
      movieCopy = movieCopy.filter(ele => ele.watched === true)
      this.setState({searchList: movieCopy, found:true})
    } else {
      let movieCopy = this.state.movies.slice()
      movieCopy = movieCopy.filter(ele => ele.watched === false)
      this.setState({searchList: movieCopy, found:true})
    }
  }

  toggleWatch = (title) => {
    const moviesCopy = this.state.movies.slice()
    moviesCopy.forEach(ele => {
      if (ele.title === title) {
        ele.watched = !ele.watched
      }
    })
    this.setState({movies: moviesCopy})
  }

  addMovie = (value) => {
    const input = {
      title: value,
      watched: false
    }
    const moviesCopy = this.state.movies.slice()
    moviesCopy.unshift(input)
    this.setState({movies:moviesCopy})
  }

  filterMovies = (value) => {
    if (this.state.searchList === 'No movies found') {
      this.setState({searchList:this.state.movies, found:false})
    }
    value = value.toLowerCase()
    const stateCopy = this.state.movies.slice()
    const filtered = stateCopy.filter((movie) => {
      if (movie.title.toLowerCase().split(' ').includes(value)) {
        return movie
      }
    })
    if (filtered.length === 0) {
      this.setState({searchList:'No movies found', found:false})
    } else {
      this.setState({searchList: filtered, found:true})
    }
  }

  render() {
    return (
      <div>
        <h2 style={{background:'#F7F7F7', marginBottom:'200px', paddingLeft:'25px'}}> Movie List</h2>
        <UserSubmits list={this.state.movies} addMovie={this.addMovie}/>
        <br/><br/>
        <SearchBar list={this.state.movies} filterMovies={this.filterMovies}/>
        <br/><br/>
        <MovieList list={this.state} toggleWatch={this.toggleWatch} clickHandler={this.clickHandler}/>
      </div>
    )
  }
}

export default App;