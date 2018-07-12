import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div id="pattern" className="pattern">
  	<ul className="list img-list">
        {children}
      </ul>
    </div>
  );
};
