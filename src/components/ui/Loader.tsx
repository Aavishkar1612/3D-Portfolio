import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <h1 className="loader-title gradient-text">
          Aavishkar Bhosale
        </h1>
        <div className="spinner"></div>
        <p className="loader-subtext">Initializing 3D Experience...</p>
      </div>
    </div>
  );
};

export default Loader;