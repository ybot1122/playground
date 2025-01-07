const React = require("react");

const Comments = require("./App");
const Counter = require("./Counter");

module.exports = function () {
  return (
    <div>
      <Comments />
      <Counter />
    </div>
  );
};
