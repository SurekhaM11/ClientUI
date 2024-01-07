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
    case "password":
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
    case "radio":
      return (
        <Fragment>
          {options.map((options) => {
            return (
              <Fragment>
                {" "}
                <input
                  name={model}
                  onChange={handleChange}
                  type={type}
                  value={options}
                  className="mx-2"
                />
                {options}
              </Fragment>
            );
          })}
        </Fragment>
      );
    case "checkbox":
      return (
        <Fragment>
          {options.map((options) => {
            return (
              <Fragment>
                {" "}
                <input
                  name={model}
                  onChange={handleChange}
                  type={type}
                  value={options}
                  className="mx-2"
                />
                {options}
              </Fragment>
            );
          })}
        </Fragment>
      );
    case "date":
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
