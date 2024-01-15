"use client";
import React, { useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import configuration from "./configuration.json";
import { Input } from "@/inputControls/Input";
import {
  hanldeFiledValidation,
  handleFormValidation,
} from "@/Validations/appValidations";
import { API } from "@/app/common/API";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Cookies } from "@/app/common/cookie";

export const Login = () => {
  const [inputControls, setInputControls] = useState(configuration);
  const dispatch = useDispatch(); //alternate to dispatch from store
  const fnChange = (eve) => {
    setInputControls(hanldeFiledValidation(eve, inputControls));
  };

  const handleLogin = async () => {
    try {
      const [isForminvalid, clonedInputControls, dataObj] =
        handleFormValidation(inputControls);

      if (isForminvalid) {
        setInputControls(clonedInputControls);
        return;
      }
      //console.log("some fdsf", dataObj);
      const result = await API.fnSendPostReq("/std/login", {
        data: dataObj,
      });
      dispatch({ type: "LOADER", payload: true });
      console.log("result", result?.data?.length);
      if (result?.data?.length > 0) {
        toast.success("Valid user");
        console.log("valid user");
        const { token, _id } = result?.data[0];
        dispatch({ type: "AUTH", payload: true });
        Cookies.setItem("token", token);
        Cookies.setItem("id", _id);
      } else {
        toast.error("Invalid user");
        console.log("invalid user");
      }
    } catch (err) {
      console.error("login error", err);
    } finally {
      dispatch({ type: "LOADER", payload: false });
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center my-3">Login</h2>
      {inputControls?.map(
        ({ lbl, type, errorMessage, value, model, index }) => {
          return (
            <div key={model} className="row mb-3">
              <div className="col-sm-5 text-end">
                <b>{lbl}:</b>
              </div>
              <div className="col-sm-3">
                <Input
                  model={model}
                  type={type}
                  value={value}
                  handleChange={fnChange}
                />
              </div>
              <div className="col-sm-4">
                <b className="text-danger">{errorMessage}</b>
              </div>
            </div>
          );
        }
      )}

      <div className="row">
        <div className="offset-sm-5 col-sm-7">
          <button onClick={handleLogin} className="btn btn-primary me-3">
            Login
          </button>
          <Link href="/register">To Register</Link>
        </div>
      </div>
    </div>
  );
};
