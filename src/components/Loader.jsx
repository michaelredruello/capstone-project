import React from "react";
import { Oval } from "react-loader-spinner";

const LoaderSpin = () => {
  return (
    <Oval
      className="deals-loader"
      type="Oval"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
};

export default LoaderSpin;
