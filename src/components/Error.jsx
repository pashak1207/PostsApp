import React from "react";

export const Error = ({ error }) => {
  return (
    <div className="alert alert-warning" role="alert">
      <p>{error.toString()}</p>
    </div>
  );
};
