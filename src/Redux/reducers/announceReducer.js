import { ADD, CHANGE_TITLE, CHANGE_CATEGORY } from "../actionType";

const initialState = {
  todos: [],
  title: "",
  category: ""
};

const announceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default announceReducer;
