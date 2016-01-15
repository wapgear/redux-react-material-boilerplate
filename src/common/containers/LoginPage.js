import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as LoginActions from '../actions/user';

function mapStateToProps(state) {
  return {
    username: state.user.username,
    userId: state.user.userId,
    error: state.user.error,
    token: state.user.token,
    logged: state.user.logged
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
