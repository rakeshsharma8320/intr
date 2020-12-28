import React from "react";

const Input = (props, ref) => {
  return <input ref={ref} {...props} />;
};

export default React.forwardRef(Input);
