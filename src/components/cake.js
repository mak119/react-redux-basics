import * as cakeActions from "../actions/cakeActions";

import { connect } from "react-redux";

const Cake = props => {
  return (
    <>
      <h1>Number of cakes: {props.numberOfCakes}</h1>
      <button onClick={() => props.buyCake()}>Buy cake</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    numberOfCakes: state.cake.numberOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(cakeActions.buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
