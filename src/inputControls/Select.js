"use client";
import React from "react";

export const Select = (props) => {
  const { model, options, values, handleChange, value } = props;
  return (
    <select name={model} onChange={handleChange} value={value}>
      <option value="">-Please select-</option>
      {options.map((option, index) => (
        <option key={index} value={values[index]}>
          {option}
        </option>
      ))}
    </select>
  );
};
