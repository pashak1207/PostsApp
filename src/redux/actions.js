import {
  CREATE_POST,
  HIDE_ERROR,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ERROR,
  SHOW_LOADER,
} from "./types";

export function createPostAction(payload) {
  return {
    type: CREATE_POST,
    payload: payload,
  };
}

export function loadingOn() {
  return {
    type: SHOW_LOADER,
  };
}
export function loadingOff() {
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
  return {
    type: REQUEST_POSTS,
  };
  // return async function (dispatch) {
  //   try {
  //     dispatch(loadingOn());
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //     );
  //     const json = await response.json();
  //     dispatch({ type: FETCH_POSTS, payload: json });
  //     dispatch(loadingOff());
  //     dispatch(hideError());
  //   } catch (e) {
  //     dispatch(showError(e));
  //   }
  // };
}
