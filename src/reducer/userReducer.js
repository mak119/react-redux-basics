import actions from "../actions";

const defaultState = {
  users: [],
  loading: false,
  error: false
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_USERS:
      return {
        ...state,
        loading: true
      };

    case actions.GET_USERS_SUCCESS:
      return {
        loading: false,
        error: false,
        users: action.payload
      };
    case actions.GET_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        users: []
      };
    default:
      return state;
  }
};

export default userReducer;
