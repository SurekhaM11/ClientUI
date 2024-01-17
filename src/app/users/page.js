"use client";
import React, { useEffect } from "react";
import { API } from "../common/API";
import { useDispatch } from "react-redux";

const users = () => {
  useEffect(() => {
    fnGetUsers();
  }, []);
  const dispatch = useDispatch();
  const fnGetUsers = async () => {
    try {
      dispatch({ type: "LOADER", payload: true });
      const result = await API.fnSendGetReq("/std/get-std");
      console.log(result);
    } catch (err) {
      console.error("error from  getusers:", err);
    } finally {
      dispatch({ type: "LOADER", payload: false });
    }
  };
  return <div className="text-center">users</div>;
};

export default users;
