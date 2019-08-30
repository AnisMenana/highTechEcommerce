import { ADD, INPUT_CHANGE } from "./actionType";

export const add = payload => {
  return {
    type: ADD,
    payload
  };
};

export const change = payload => {
  return {
    type: INPUT_CHANGE,
    payload
  };
};
