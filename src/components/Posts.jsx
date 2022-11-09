import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

export const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className={"text-center"}>Постів немає</p>;
  }
  return syncPosts.map((post) => <Post key={post.id} post={post} />);
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
