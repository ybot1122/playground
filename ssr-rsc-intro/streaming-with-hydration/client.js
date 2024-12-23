const React = require("react");
const ReactDOM = require("react-dom/client");
const App = require("./StreamingWithHydration.jsx");

ReactDOM.hydrateRoot(document, <App />);
