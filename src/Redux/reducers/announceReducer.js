import {
  ADD,
  CHANGE_TITLE,
  CHANGE_CATEGORY,
  CHANGE_BRAND,
  CHANGE_DESCRIPTION,
  CHANGE_PRICE,
  CHANGE_IMGA,
  CHANGE_IMGB
} from "../actionType";
import { product } from "../../dataProduct";

const initialState = {
  productArray: product,
  title: "",
  category: "",
  brand: "",
  description: "",
  price: "",
  imga: "",
  imgb: ""
};

const announceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        productArray: state.productArray.concat(action.payload)
      };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_CATEGORY:
      return { ...state, category: action.payload };
    case CHANGE_BRAND:
      return { ...state, brand: action.payload };
    case CHANGE_DESCRIPTION:
      return { ...state, description: action.payload };
    case CHANGE_PRICE:
      return { ...state, price: action.payload };
    case CHANGE_IMGA:
      return { ...state, imga: action.payload };
    case CHANGE_IMGB:
      return { ...state, imgb: action.payload };
    default:
      return state;
  }
};

export default announceReducer;
