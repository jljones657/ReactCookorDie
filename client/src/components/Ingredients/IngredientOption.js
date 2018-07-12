import React from "react";

export const IngredientOption = props => (
    <label className="control control--checkbox">{props.children}
    <input type="checkbox"/>
    <div className="control__indicator"></div>
  </label>
);
