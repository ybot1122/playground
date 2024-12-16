/**
 * Clientside javascript bundle that will hyrate the
 * HTML that we delivered to the client via `renderToString()`
 */

const React = require("react");
const ReactDOM = require("react-dom/client");
const App = require("./App.jsx");

console.log(document.getElementById("app-root"));

ReactDOM.hydrateRoot(document.getElementById("app-root"), <App />);
