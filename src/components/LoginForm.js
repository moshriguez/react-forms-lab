import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username === '') {
      alert('Username is required to continue.')
    } else if (this.state.password === '') {
      alert('Password is required to continue.')
    } else {
      let username = this.state.username
      let password = this.state.password
    this.props.handleLogin( { username, password } )
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username"
            onChange={event => this.handleChange(event)} 
            value={this.state.username}
            type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" 
            onChange={event => this.handleChange(event)} 
            value={this.state.password}
            type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
