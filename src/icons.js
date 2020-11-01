import React from "react";
import { FcMinus, FcCancel, FcApproval } from "react-icons/fc";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FcApproval className="icons" size={50} />;
    case "cross":
      return <FcCancel className="icons" size={50} />;
    default:
      return <FcMinus className="icons" size={50} />;
  }
};

export default Icon;