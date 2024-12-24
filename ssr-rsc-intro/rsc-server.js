const express = require("express");
const app = express();
const port = 3000;

require("@babel/register")({
  extensions: [".jsx"],
  presets: ["@babel/preset-react"],
});

const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);
app.use(middleware(compiler));

const register = require("react-server-dom-webpack/node-register");
register();

/**
 * SECTION 7: Serverside Rendering React with Suspense, Streaming, WITH Clientside Hydration AND React Server Components.
 */

const RscPage = require("./react-server-components/App.jsx");
const ReactServerDom = require("react-server-dom-webpack/server");

// RENDERING A PURE SERVER COMPONENT APP

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <div id="root"></div>
                <script src="/rsc.bundle.js"></script>
            </body>
        </html>`);
});

app.get("/rsc", (req, res) => {
  const { pipe } = ReactServerDom.renderToPipeableStream(RscPage(), {});
  pipe(res);
});

// RENDERING AN APP WITH SERVER AND CLIENT COMPONENTS

app.get("/interactive", (req, res) => {
  res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <div id="root"></div>
                <script src="/rscInteractive.bundle.js"></script>
            </body>
        </html>`);
});

const InteractiveRsc = require("./react-server-components/InteractiveApp.jsx");

app.get("/rsc-interactive", (req, res) => {
  const moduleMap = {
    "file:///Users/toby.liu/Repos/playground/ssr-rsc-intro/react-server-components/Counter.jsx":
      {
        id: "./react-server-components/Counter.jsx",
        chunks: ["client0"],
        name: "*",
      },
  };
  const { pipe } = ReactServerDom.renderToPipeableStream(
    InteractiveRsc(),
    moduleMap
  );
  pipe(res);
});

app.listen(port, () => {
  console.log(`RSC app listening on port ${port}`);
});
