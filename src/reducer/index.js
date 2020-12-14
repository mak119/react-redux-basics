import { combineReducers } from "redux";
import cakeReducer from "../reducer/cakeReducer";
import iceCreamReducer from "../reducer/iceCreamReducer";
import userReducer from "../reducer/userReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  post: postReducer
});

export default rootReducer;
