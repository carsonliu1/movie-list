import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:''
    }
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.props.filterMovies(this.state.value)
    this.setState({value:''})
  }

  changeHandler(e) {
    this.setState({value: e.target.value})
  }
  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          name='title'
          placeholder='Search...'
          value={this.state.value}
          onChange={this.changeHandler.bind(this)}
          />
        <input type='submit' value='GO!'></input>
      </form>
    )
  }
}

export default SearchBar;