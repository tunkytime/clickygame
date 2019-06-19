import React from "react";

function Container(props) {
  return <div className="container-fluid mt-5 p-3">{props.children}</div>;
}

export default Container;
