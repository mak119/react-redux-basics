import axios from "axios";
import postActions from "../actionTypes/postActionTypes";

export const getPostByIdSuccess = post => {
  return {
    type: postActions.GET_POST_BY_ID_SUCCESS,
    payload: [post]
  };
};

export const fetchPostByIdSuccess = post => {
  return {
    type: postActions.FETCH_POST_BY_ID_SUCCESS,
    payload: [post]
  };
};

export const getPostsSuccess = post => {
  return {
    type: postActions.GET_POSTS_SUCCESS,
    payload: post
  };
};

export const getPostByIdFailure = error => {
  return {
    type: postActions.GET_POST_BY_ID_FAILURE,
    payload: error
  };
};

export const getPostById = id => {
  return async dispatch => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const post = await axios.get(url);
      console.log("posts", post);
      dispatch(fetchPostByIdSuccess(post.data));
    } catch (error) {
      dispatch(getPostByIdFailure(error));
    }
  };
};

export const getAllPosts = () => {
  return async dispatch => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const post = await axios.get(url);
      post.data.length = 10;
      console.log("posts", post);
      dispatch(getPostsSuccess(post.data));
    } catch (error) {
      dispatch(getPostByIdFailure(error));
    }
  };
};
