import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ERROR,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
} from "./types";

export function createPostAction(payload) {
  return {
    type: CREATE_POST,
    payload: payload,
  };
}

function loadingOn() {
  return {
    type: SHOW_LOADER,
  };
}
function loadingOff() {
  return {
    type: HIDE_LOADER,
  };
}

export function showError(error) {
  return function (dispatch) {
    dispatch({
      type: SHOW_ERROR,
      payload: error,
    });
    setTimeout(() => {
      dispatch(hideError());
    }, 3000);
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  };
}

export function fetchPostsActions() {
  return async function (dispatch) {
    try {
      dispatch(loadingOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(loadingOff());
      dispatch(hideError());
    } catch (e) {
      dispatch(showError(e));
    }
  };
}
