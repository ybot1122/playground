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

/**
 * SECTION 7: Serverside Rendering React with Suspense, Streaming, WITH Clientside Hydration AND React Server Components.
 */

const RscPage = require("./react-server-components/App.jsx");
const ReactServerDom = require("react-server-dom-webpack/server");

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>Hello World</title>
                <script src="/rsc.bundle.js"></script>
            </head>
            <body>
                <div id="root"></div>
            </body>
        </html>`);
});

app.get("/rsc", (req, res) => {
  const moduleMap = {};
  const { pipe } = ReactServerDom.renderToPipeableStream(RscPage(), moduleMap);
  pipe(res);
});

app.listen(port, () => {
  console.log(`RSC app listening on port ${port}`);
});
