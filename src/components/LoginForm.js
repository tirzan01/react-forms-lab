import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  render() {
    return (
      <form onSubmit={e => {
          e.preventDefault()
          if(this.state.username.length !== 0 && this.state.password.length !== 0){
            this.props.handleLogin({username: this.state.username, password: this.state.password})
          }
        }}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
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
