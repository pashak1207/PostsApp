import React from "react";

export default ({ post, handler }) => {
  return (
    <div className={"card mt-3"}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <h5 className="card-title">{post.title}</h5>
        <button
          onClick={handler}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};
