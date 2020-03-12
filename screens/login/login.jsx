import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Login = (props) => {
  const { AuthToken } = props;
  console.log(AuthToken);

  return (
    <View>
      <Text> This is the Login Page </Text>
    </View>
  );
};

// Default Props
Login.defaultProps = {
  AuthToken: '',
};

// PropType validaiton
Login.propTypes = {
  AuthToken: PropTypes.string,
};

export default Login;
