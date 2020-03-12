import { connect } from 'react-redux';
import Login from './login';

const mapStateToProps = (state) => ({
  AuthToken: state.user.AuthToken,
});

export default connect(mapStateToProps)(Login);
