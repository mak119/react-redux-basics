import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../actions/iceCreamActions";

const IceCream = () => {
  const numberOfIceCreams = useSelector(
    state => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();
  return (
    <>
      <h1>Number of ice cream: {numberOfIceCreams}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice cream</button>
    </>
  );
};

export default IceCream;
