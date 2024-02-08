// authReducer.js
const initialState = {
    isAuthenticated: false,
    username: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          username: action.payload.username,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          username: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  