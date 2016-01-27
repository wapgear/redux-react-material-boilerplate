import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {reduxForm} from 'redux-form';
import Helmet from 'react-helmet'
import * as UserActions from '../actions/user';


class Login extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps.user.logged){
            console.log('Ti avtorizovan, chert ti ebanij');
        }
    }

  onSubmit(event) {
    event.preventDefault();
    const login = this.refs.login.getValue();
    const password = this.refs.password.getValue();
    this.props.auth(login,password);
    console.log(`Login: ${login} Password: ${password}`);
  }

  render() {
      console.log(this.props.user);
    return (
    	<form style={{textAlign:'center'}} className="login" onSubmit={this.onSubmit}>
          <Helmet title="Login page"/>
            <TextField
                style={{textAlign:'left'}}
                ref="login"
                hintText="Enter your login"
                floatingLabelText="Login"
                errorText={this.props.user.error}/><br/>
            <TextField
                ref="password"
                hintText="Enter your password"
                floatingLabelText="Password"
                type="password"
                errorText={this.props.user.error}/><br/>
            <RaisedButton label="Login" secondary={true} onClick={this.onSubmit} onTouchTap={this.onSubmit}/>
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

function mapStateToProps(state) {
    return {
        user : state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
