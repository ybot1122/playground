const React = require("react");
const ReactDOM = require("react-dom/client");
const ReactServerDomWebpack = require("react-server-dom-webpack/client");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

const cache = new Map();

function Root() {
  let content = cache.get("home");
  if (!content) {
    content = ReactServerDomWebpack.createFromFetch(fetch("/rsc"));
    cache.set("home", content);
  }

  return <>{React.use(content)}</>;
}
