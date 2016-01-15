import React, { Component, PropTypes } from 'react';
import AppBar from '../../material-ui/app-bar';


class Header extends Component {

  render() {

    return (
      	<AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
    );
  }
}


export default Header;