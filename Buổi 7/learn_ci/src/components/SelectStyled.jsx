import React from "react";
import { Select } from "antd";

const SelectStyled = (props) => {
  return (
    <Select
      {...props}
      className="h-10 [&_.ant-select-selector]:h-11 [&_.ant-select-selector]:px-3 [&_.ant-select-selector]:text-base [&_.ant-select-selector]:rounded-lg"
    />
  );
};

export default SelectStyled;