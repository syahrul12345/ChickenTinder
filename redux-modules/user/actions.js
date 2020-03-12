const LoginAction = (token) => ({
  type: 'LOGIN_ACTION',
  payload: {
    token,
  },
});

const LogoutAction = () => ({
  type: 'LOGOUT_ACTION',
});

export {
  LoginAction,
  LogoutAction,
};
