import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet'


class Login extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(this.props);
    this.props.auth(this.props.username, this.props.password);
  }

  render() {
    const { username, logged, err, token, password } = this.props;
    return (
    	<form className="login" onSubmit={this.onSubmit} >
          <Helmet title="Login page"/>
        123
          <div><label>Login <input type="text" {...username} onChange="" /></label></div>
          <div><label>Password <input type="password" {...password} /></label></div>
          <div><input type="submit" value="Login" /></div>
  		</form>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string,
  logged: PropTypes.bool.isRequired,
  token: PropTypes.string,
  err: PropTypes.object
};


export default Login;
