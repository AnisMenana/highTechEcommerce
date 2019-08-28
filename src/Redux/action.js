import { FLTR } from "./actionType";

export const fltr = payload => {
  return {
    type: FLTR,
    payload
  };
};
