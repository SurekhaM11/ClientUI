"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import configuration from "./configuration.json";
import { Input } from "@/inputControls/Input";
import {
  handleFormValidation,
  hanldeFiledValidation,
  formReset,
} from "@/Validations/appValidations";
import Link from "next/link";
import { Select } from "@/inputControls/Select";
import { Textarea } from "@/inputControls/Textarea";
import { appStore } from "@/store/appStore";
import { toast } from "react-toastify";
import { API } from "../common/API";
const Register = () => {
  const [inputControls, setInutControls] = useState(configuration);

  const fnChange = (eve) => {
    setInutControls(hanldeFiledValidation(eve, inputControls));
  };
  const handleRegister = async () => {
    try {
      const [isForminvalid, clonedInputControls, dataObj] =
        handleFormValidation(inputControls);

      if (isForminvalid) {
        setInutControls(clonedInputControls);
        return;
      }
      const result = API.fnSendPostReq("/std/reg-std", {
        data: dataObj,
      });
      // const result = await axios.post("http://localhost:2020/std/reg-std", {
      //   data: dataObj,
      // });

      const { acknowledged, insertedId } = result?.data;
      if (acknowledged && insertedId) {
        toast.success("inserted data successfully");
        setInutControls(formReset(inputControls));
      } else {
        toast.error("data not inserted");
      }
      appStore.dispatch({ type: "LOADER", payload: true });
    } catch (exc) {
      console.error(exc);
      toast.error("something went wrong");
    } finally {
      appStore.dispatch({ type: "LOADER", payload: false });
    }

    //console.log("some fdsf", dataObj);
  };
  const prepareInputControls = (tag, obj) => {
    switch (tag) {
      case "input":
        return <Input {...obj} handleChange={fnChange} />;
      case "select":
        return <Select {...obj} handleChange={fnChange} />;
      default:
        return <Textarea {...obj} handleChange={fnChange} />;
    }
  };
  return (
    <div className="container-fluid">
      <h2 className="text-center my-3">Register</h2>
      {inputControls?.map((obj, index) => {
        const { lbl, errorMessage, tag } = obj;
        return (
          <div key={index} className="row mb-3">
            <div className="col-sm-5 text-end">
              <b>{lbl}:</b>
            </div>
            <div className="col-sm-3">{prepareInputControls(tag, obj)}</div>
            <div className="col-sm-4">
              <b className="text-danger">{errorMessage}</b>
            </div>
          </div>
        );
      })}

      <div className="row">
        <div className="offset-sm-5 col-sm-7">
          <button onClick={handleRegister} className="btn btn-primary me-3">
            Register
          </button>
          <Link href="/">To Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
