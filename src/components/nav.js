import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <Link to="cake">
          <li>Cake</li>
        </Link>
        <Link to="icecream">
          <li>Ice Cream</li>
        </Link>{" "}
        <Link to="user">
          <li>User</li>
        </Link>{" "}
        <Link to="posts">
          <li>Post</li>
        </Link>
      </ul>
    </>
  );
};

export default Nav;
