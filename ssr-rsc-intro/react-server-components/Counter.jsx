"use client";

const React = require("react");

import { useState } from "react";

module.exports = function () {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return <button onClick={increment}>{count}</button>;
};
