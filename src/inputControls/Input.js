"use client";
import React, { Fragment } from "react";

export const Input = ({ type, value, handleChange, model }) => {
  return (
    <Fragment>
      <input
        name={model}
        onChange={handleChange}
        className="form-control"
        type={type}
      />
    </Fragment>
  );
};
