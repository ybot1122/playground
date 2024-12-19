const React = require("react");
const ReactDOM = require("react-dom/client");
const App = require("./Streaming.jsx");

ReactDOM.hydrateRoot(document.getElementById("app-root"), <App />);
