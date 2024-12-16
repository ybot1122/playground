const React = require("react");

module.exports = function ({ items }) {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>Current count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
