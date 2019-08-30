import { combineReducers } from "redux";
import announceReducer from "./announceReducer";

const reducer = combineReducers({
  announce: announceReducer
});
export default reducer;
