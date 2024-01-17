"use client";
import React, { useEffect } from "react";
import { API } from "../common/API";
import { Cookies } from "../common/cookie";
import { useDispatch } from "react-redux";

const profile = () => {
  useEffect(() => {
    fngetProfile();
  }, []);
  const dispatch = useDispatch();
  const fngetProfile = async () => {
    try {
      dispatch({ type: "LOADER", payload: true });
      const result = await API.fnSendGetReq(
        `/std/get-std-by-id?id=${Cookies.getItem("id")}`
      );
      console.log("result from profile:", result);
    } catch (err) {
      console.error("error from get-std-by-id:", err);
    } finally {
      dispatch({ type: "LOADER", payload: false });
    }
  };
  return <div className="text-center">profile</div>;
};

export default profile;
