import { GET_ALL_USERS, ALERT_USERS, GET_ONE_USER } from '../actions/types';

const initialState = {
  allUsers: null,
  alert: '',
  currentUser: null,
};

const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };
    case ALERT_USERS:
      return {
        ...state,
        alert: payload,
      };
    case GET_ONE_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default users;
