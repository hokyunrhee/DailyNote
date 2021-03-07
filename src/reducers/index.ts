import {combineReducers} from 'redux';

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
  type: USER_LOGOUT,
});

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
