import React from "react";
import { Link } from "react-router-dom";

export const App404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ color: "red", textAlign: "center" }}>Error 404</h1>
      <h2 style={{ color: "red", textAlign: "center", margin: "20px" }}>
        You do not have access
      </h2>
      <Link to="/">
        <button style={{ width: "200px", height: "40px" }}>
          Return to Main page
        </button>
      </Link>
    </div>
  );
};
