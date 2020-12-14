import actions from "../actionTypes/userActionTypes";
import axios from "axios";

export const getUsers = () => {
  return {
    type: actions.GET_USERS
  };
};

export const getUsersSuccess = users => {
  return {
    type: actions.GET_USERS_SUCCESS,
    payload: users
  };
};

export const getUsersFailure = error => {
  return {
    type: actions.GET_USERS_FAILURE,
    payload: error
  };
};

export const fetchUsers = () => {
  return async dispatch => {
    try {
      dispatch(getUsers());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response && response.status === 200) {
        dispatch(getUsersSuccess(response.data));
      }
    } catch (error) {
      const errorMessage = error.message;

      dispatch(getUsersFailure(errorMessage));
    }
  };
};
