import React, { useState } from "react";
import { connect } from "react-redux";
import * as postActions from "../actions/postActions";

const Posts = props => {
  const [postId, setPostId] = useState(1);

  const changeHandler = e => {
    return setPostId(e.target.value);
    // return;
  };

  const submitHandler = e => {
    e.preventDefault();

    props.getPostById(postActions.getPostById(postId));
  };
  return (
    <>
      <h1>Get post by Id</h1>
      <form onSubmit={e => submitHandler(e)}>
        <div>
          <label htmlFor="cake">Post Id : {postId}</label>
          <br />
          <input
            type="text"
            name="post"
            value={postId}
            onChange={e => changeHandler(e)}
          />
        </div>
        <button type="submit">Get</button>
      </form>
      {!props.post.loading &&
        props.post.post.length > 0 &&
        props.post.post.map(post => {
          return (
            <div key={post.id}>
              <h1>Title: {post.title}</h1>
              <h2>Body: {post.body}</h2>
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
    getPostById: action => dispatch(action)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
