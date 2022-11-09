import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "./components/Error";
import React from "react";

function App() {
  const isError = useSelector((state) => state.app.error);
  const errorType = useSelector((state) => state.app.errorType);

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          {isError ? <Error error={errorType} /> : null}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронні пости</h2>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className="col">
          <h2>Асинхронні пости</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
