import React from "react";
import loadingImg from "../spinner.gif";

export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loadingImg} alt="loading page" style={{ width: "100px" }} />
    </div>
  );
};
