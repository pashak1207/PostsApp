import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsActions } from "../redux/actions";
import { Loader } from "./Loader/Loader";
import { Error } from "./Error";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const isLoading = useSelector((state) => state.app.loading);

  if (!posts.length && !isLoading) {
    return (
      <button
        onClick={() => dispatch(fetchPostsActions())}
        className="btn btn-primary"
      >
        Завантажити пости
      </button>
    );
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};
