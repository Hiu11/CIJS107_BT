import React from "react";
import { Input } from "antd";

const InputPasswordStyled = (props: React.ComponentProps<typeof Input.Password>) => {
  return (
    <Input.Password
      {...props}
      className="rounded-md h-10"
    />
  );
};

export default InputPasswordStyled;