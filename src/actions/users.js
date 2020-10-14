import axios from 'axios';
import { GET_ALL_USERS, ALERT_USERS, GET_ONE_USER, LOADING_USER } from './types';

/**
 * Get all users
 * @returns {object} - list of all users
 */
export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.github.com/users');
    dispatch({
      type: GET_ALL_USERS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ALERT_USERS,
      payload: err.message,
    });
  }
};

/**
 * Get one user by user name
 * @param {string} userName - user name
 * @returns {object} one user
 */
export const getOneUser = (userName) => async (dispatch) => {
  dispatch({
    type: LOADING_USER,
  });
  try {
    const response = await axios.get(`https://api.github.com/users${userName}`);
    dispatch({
      type: GET_ONE_USER,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ALERT_USERS,
      payload: err.message,
    });
  }
};
