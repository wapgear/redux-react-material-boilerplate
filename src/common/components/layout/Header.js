import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

export default class LeftNavOpenRightExample extends React.Component {

constructor(props) {
    super(props);
    this.state = {open: true};
    this.handleToggle = this.handleToggle.bind(this);
  }

	handleToggle() {
		console.log('blabla');
	 this.setState({open: !this.state.open}); 
	} 

  render() {
    return (
      <div>
        <RaisedButton
          label="Controlled LeftNav That Opens From Right" 
          onTouchTap={this.handleToggle}
          onClick={this.handleToggle}/>
        <LeftNav width={200} open={this.state.open}>
          <AppBar title="AppBar"/>
        </LeftNav>
      </div>
    );
  }
}