import React from "react";
import "./style.css"


// exporting the container, row, and col components from this file
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid p-0 " : ""}`}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children}) {
  return (
    <div
      className= {size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
