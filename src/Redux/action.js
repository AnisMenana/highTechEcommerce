import { ADD, CHANGE_TITLE, CHANGE_CATEGORY } from "./actionType";

export const add = payload => {
  return {
    type: ADD,
    payload
  };
};

export const changeTitle = payload => {
  return {
    type: CHANGE_TITLE,
    payload
  };
};

export const changeCategory = payload => {
  return {
    type: CHANGE_CATEGORY,
    payload
  };
};
