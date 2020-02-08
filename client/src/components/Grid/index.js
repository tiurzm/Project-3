import React from "react";

// exporting the container, row, and col components from this file
export function Container({ props, fluid, children }) {
  return <div className={`container${fluid ? "-fluid p-0 " : ""}`} {...props}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
