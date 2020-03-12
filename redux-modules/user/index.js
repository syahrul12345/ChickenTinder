const UserInitialState = {
  AuthToken: null,
};

function UserReducer(state = UserInitialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      // eslint-disable-next-line no-case-declarations
      const { AuthToken } = action.payload;
      return {
        ...state,
        AuthToken,
      };
    default:
      return {
        ...state,
      };
  }
}

export default UserReducer;
