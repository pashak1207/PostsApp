import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_POSTS, REQUEST_POSTS } from "./types";
import { hideError, loadingOff, loadingOn, showError } from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(loadingOn());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(loadingOff());
    yield put(hideError());
  } catch (e) {
    yield put(showError(e));
    yield put(loadingOff());
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
