import { ADD, INPUT_CHANGE } from "../actionType";

const initialState = {
  todos: [],
  inputValue: ""
};

const announceReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD:
      return { ...state, todos: state.todos.concat(state.inputValue) };
    case INPUT_CHANGE:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export default announceReducer;
