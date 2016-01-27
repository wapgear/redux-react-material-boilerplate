import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {reduxForm} from 'redux-form';
import Helmet from 'react-helmet'
import * as UserActions from '../../actions/user';


class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.user);
        return (
           <div>
               <Helmet title="My dashboard"/>
               TVOI DASHBOARD SHATAL
           </div>
        );
    }
}

Dashboard.propTypes = {

};

function mapStateToProps(state) {
    return {
        user : state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
