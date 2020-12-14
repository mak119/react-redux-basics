import postActions from "../actionTypes/postActionTypes";

const defaultState = {
  loading: true,
  post: [],
  posts: [],
  postById: []
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case postActions.GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload
      };
    case postActions.FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        postById: action.payload
      };
    case postActions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
