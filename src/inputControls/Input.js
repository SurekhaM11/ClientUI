"use client";
import React, { Fragment } from "react";
import { Select } from "./Select";
import { Textarea } from "./Textarea";

export const Input = ({
  type,
  value,
  handleChange,
  model,
  options,
  values,
}) => {
  switch (type) {
    case "text":
    case "password":
    case "date":
      return (
        <Fragment>
          <input
            name={model}
            onChange={handleChange}
            className="form-control"
            type={type}
            value={value}
          />
        </Fragment>
      );
    case "radio":
      return (
        <Fragment>
          {options.map((options, index) => {
            return (
              <Fragment>
                {" "}
                <input
                  key={index}
                  name={model}
                  onChange={handleChange}
                  type={type}
                  value={options[index]}
                  className="mx-2"
                  checked={value == values[index]}
                />
                {options}
              </Fragment>
            );
          })}
        </Fragment>
      );
    case "checkbox":
      const checkedArr = value.split(",");
      return (
        <Fragment>
          {options.map((val, index) => {
            return (
              <>
                <input
                  checked={checkedArr.includes(values[index])}
                  value={values[index]}
                  className="ms-3"
                  name={model}
                  onChange={handleChange}
                  type={type}
                />{" "}
                {val}
              </>
            );
          })}
        </Fragment>
      );

    case "select":
      return (
        <Fragment>
          <Select model={model} options={options} values={values} />
        </Fragment>
      );
    case "textarea":
      return (
        <Fragment>
          <Textarea model={model} />
        </Fragment>
      );
  }
};
