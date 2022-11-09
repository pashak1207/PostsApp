import React from "react";
import Post from "./Post";
import { connect, useDispatch } from "react-redux";
import { removePostAction } from "../redux/actions";

export const Posts = ({ syncPosts }) => {
  const dispatch = useDispatch();

  if (!syncPosts.length) {
    return <p className={"text-center"}>Постів немає</p>;
  }
  return syncPosts.map((post) => (
    <Post
      handler={() => dispatch(removePostAction(post.id))}
      key={post.id}
      post={post}
    />
  ));
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
