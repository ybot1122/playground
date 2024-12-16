const React = require("react");
const Header = require("./Header");
const List = require("./List");
const Counter = require("./Counter");

module.exports = function () {
  return (
    <React.StrictMode>
      <div style={{ margin: "20px" }}>
        <Header>I Am a Header, Using the children Prop!</Header>
        <List
          items={["Look at me", "I can pass an array of strings", "as a prop"]}
        />
        <p
          style={{
            color: "blue",
            fontWeight: "bold",
          }}
        >
          I can even <span style={{ color: "green" }}>use</span> the style prop
        </p>
        <Counter />
      </div>
    </React.StrictMode>
  );
};
