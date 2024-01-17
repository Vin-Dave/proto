import React from "react";

export const CoreExamples = ({ title, children, ...props }) => {
  return (
    <>
      <h2>{title} </h2>
      <section {...props}>{children}</section>
    </>
  );
};
