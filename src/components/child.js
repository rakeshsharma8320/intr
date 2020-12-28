import React, { useEffect } from "react";

let renderCount = 0;
export default () => {
  useEffect(() => {
    renderCount++;
  });
  return <span>renderCount:{renderCount}</span>;
};
