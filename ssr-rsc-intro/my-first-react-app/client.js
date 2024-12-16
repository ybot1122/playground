/**
 * Clientside javascript bundle that will hyrate the
 * HTML that we delivered to the client via `renderToString()`
 */

const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./App.jsx");

ReactDOM.hydrate(<App />, document.getElementById("root"));
