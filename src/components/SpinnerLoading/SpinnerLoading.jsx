import React from "react";
import { Circular, Stretch } from "styled-loaders-react";
import "./SpinnerLoading.scss";
export default function SpinnerLoading() {
  return (
    <div className="loader">
      <Circular color="#60c5ef" size="70px" />
    </div>
  );
}
