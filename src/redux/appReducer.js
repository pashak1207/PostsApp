import { HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER } from "./types";

const initialState = {
  loading: false,
  error: false,
  errorType: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ERROR:
      return { ...state, error: true, errorType: action.payload };
    case HIDE_ERROR:
      return { ...state, error: false, errorType: "" };
    default:
      return state;
  }
};
