const React = require("react");
const ReactDOM = require("react-dom/client");
const App = require("./NoStreaming.jsx");

ReactDOM.hydrateRoot(document.getElementById("app-root"), <App />);
