import React from "react";
import { Input } from "antd";

const StyledInput = (props) => {
  return (
    <Input
      {...props}
      className="h-10 rounded-lg border-gray-300 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
    />
  );
};

export default StyledInput;