import React from 'react'

class UserSubmits extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entry:'',
    }
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.props.addMovie(this.state.entry)
    this.setState({entry: ''})
  }

  entryHandler = (e) => {
    this.setState({entry: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          placeholder='Add movie title here'
          value={this.state.entry}
          onChange={this.entryHandler}
        />
        <input
          type='submit'
          value='Add'
        />
      </form>
    )
  }
}

export default UserSubmits