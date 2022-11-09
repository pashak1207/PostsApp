import { CREATE_POST } from "./types";
import { showError } from "./actions";

const spamWords = ["php", "spam", "12345"];

export const spamMiddleware = ({ dispatch }) => {
  return function (next) {
    return function (action) {
      if (action.type == CREATE_POST) {
        const foundedWords = spamWords.filter((item) =>
          action.payload.title.includes(item)
        );
        if (foundedWords.length) {
          return dispatch(showError("Ви спамер"));
        }
      }
      return next(action);
    };
  };
};
