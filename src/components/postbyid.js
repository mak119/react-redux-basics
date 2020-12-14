import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as postActions from "../actions/postActions";

const PostsById = props => {
  useEffect(() => {
    props.getpostbyidd(postActions.getPostById(props.match.params.id));
  }, []);
  return (
    <>
      <h2>Post By Id</h2>
      {props.posts.postById.length > 0 &&
        props.posts.postById.map(postData => {
          return (
            <div key={postData.id}>
              <h3>Title: {postData.title}</h3>
              <h3>Body: {postData.body}</h3>
            </div>
          );
        })}
      <Link to="/posts">All Posts</Link>
    </>
  );
};
const mapStateToProps = state => {
  return {
    posts: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getpostbyidd: action => dispatch(action)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsById);
