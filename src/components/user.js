import React from "react";
import * as userActions from "../actions/userActions";
import { connect } from "react-redux";

const User = props => {
  return (
    <>
      <h1>Users</h1>
      {props.user.loading && <p>Loading: {props.user.loading}</p>}
      {props.user.error && <p>ERROR: {props.user.error}</p>}
      {!props.user.error &&
        props.user.users.map(userData => {
          return (
            <div key={userData.id}>
              <h4>Name: {userData.name}</h4>
            </div>
          );
        })}
      <button onClick={() => props.getUsers(userActions.fetchUsers())}>
        Get Users
      </button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const maptDispatchToProps = dispatch => {
  return {
    getUsers: action => dispatch(action)
  };
};

export default connect(mapStateToProps, maptDispatchToProps)(User);
