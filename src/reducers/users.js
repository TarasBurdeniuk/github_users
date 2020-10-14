import { GET_ALL_USERS, ALERT_USERS, GET_ONE_USER, LOADING_USER } from '../actions/types';

const initialState = {
  isLoading: false,
  allUsers: null,
  alert: '',
  currentUser: null,
};

const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_USER:
      return {
        ...state,
        isLoading: true,
      };
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
        isLoading: false,
      };
    default:
      return state;
  }
};

export default users;
