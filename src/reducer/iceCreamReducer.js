import actions from "../actions";

const initialState = {
  numberOfIceCreams: 20
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
