import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import request from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as LayoutActions from '../actions/layout';
import * as UserActions from '../actions/user';
import Helmet from 'react-helmet';
import Home from '../components/Home'
import Header from '../components/layout/Header'
import Paper from 'material-ui/lib/paper';
import cookie from 'react-cookie';


class App extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
    this.eventUndo = this.eventUndo.bind(this)
    this.eventRedo = this.eventRedo.bind(this)
  }

  componentWillReceiveProps(nextState) {
    if(nextState.user.token && !cookie.load('token')) {
      console.log('Setting up token in cookie');
      cookie.save('token', nextState.user.token);
    }
    if(nextState.user.token && !nextState.user.info) {
      this.props.getUserInfo(nextState.user);
    }

    if(nextState.user.clearCookie && cookie.load('token')) {
      cookie.remove('token');
      this.props.toogleClearCookie();
    }
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  eventUndo(e) {
    e.preventDefault();
    this.props.undo();
  }

  eventRedo(e) {
    e.preventDefault();
    this.props.redo();
  }

  render() {

    const { user, version } = this.props;


    return (
      <div>
        <Header/>
        <div style={{paddingLeft: 256, paddingTop: 0, margin: '48px 72px'}}>
          <h2 style={{fontWeight:100}}>Title</h2>
          <Paper style={{padding:20}}>
          {!this.props.children && <Home />}
          {this.props.children}
          </Paper>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter : state.counter.present,
    todos : state.todos.present,
    version : state.version,
  	user : state.user,
    layout : state.layout.present
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, LayoutActions, UserActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
