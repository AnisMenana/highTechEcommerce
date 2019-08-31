import {
  ADD,
  CHANGE_TITLE,
  CHANGE_CATEGORY,
  CHANGE_BRAND,
  CHANGE_DESCRIPTION,
  CHANGE_PRICE,
  CHANGE_IMGA,
  CHANGE_IMGB,
  FILTER_CHANGE,
  FILTER_BRAND
} from "./actionType";

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

export const changeBrend = payload => {
  return {
    type: CHANGE_BRAND,
    payload
  };
};

export const changeDescription = payload => {
  return {
    type: CHANGE_DESCRIPTION,
    payload
  };
};

export const changePrice = payload => {
  return {
    type: CHANGE_PRICE,
    payload
  };
};

export const changeImga = payload => {
  return {
    type: CHANGE_IMGA,
    payload
  };
};

export const changeImgb = payload => {
  return {
    type: CHANGE_IMGB,
    payload
  };
};

export const filterChange = payload => {
  return {
    type: FILTER_CHANGE,
    payload
  };
};
export const filterBrand = payload => {
  return {
    type: FILTER_BRAND,
    payload
  };
};
