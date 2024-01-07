"use client";
import React from "react";

export const Select = ({ model, options, values }) => {
  return (
    <select name={model}>
      <option value="">-Please select-</option>
      {options.map((option, index) => (
        <option key={index} value={values[index]}>
          {option}
        </option>
      ))}
    </select>
  );
};
