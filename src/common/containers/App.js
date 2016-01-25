import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as UserActions from '../actions/user';
import * as LayoutActions from '../actions/layout';
import Helmet from 'react-helmet';
import Home from '../components/Home'
import Header from '../components/layout/Header'
import Paper from 'material-ui/lib/paper';

class App extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
    this.eventUndo = this.eventUndo.bind(this)
    this.eventRedo = this.eventRedo.bind(this)
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
  return bindActionCreators(LayoutActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
