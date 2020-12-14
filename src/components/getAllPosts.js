import React from "react";
import * as postActions from "../actions/postActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const GetAllPosts = props => {
  return (
    <>
      <h2>Posts</h2>
      <button onClick={() => props.getAllPosts(postActions.getAllPosts())}>
        {" "}
        Get Posts
      </button>
      {props.post.posts.length > 0 &&
        props.post.posts.map(postData => {
          console.log("inside", postData);
          return (
            <div key={postData.id}>
              <Link to={`postbyid/${postData.id}`}>
                <h3>Title: {postData.title}</h3>
              </Link>
            </div>
          );
        })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: actions => dispatch(actions)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GetAllPosts);
