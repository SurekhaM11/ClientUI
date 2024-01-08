"use client";
import React from "react";

export const Textarea = (props) => {
  const { model, handleChange, value } = props;
  return (
    <textarea
      name={model}
      className="form=control"
      onChange={handleChange}
      value={value}
    ></textarea>
  );
};
