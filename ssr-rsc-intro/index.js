const express = require("express");
const app = express();
const port = 3000;

/**
 * SECTION 1: Your First Serverside Rendering
 */
app.get("/tell-me-the-time", (req, res) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    second: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const formattedDate = formatter.format(Date.now());

  res.send(`<!DOCTYPE html>
    <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <p>You know what <strong>TIME</strong> it is???.</p>
            <div>
                <h1>hammer time</h1>
                <h3> jk... server time is: <pre>${formattedDate}</pre></h3>
            </div>
        </body>
    </html>`);
});

/**
 * SECTION 2: Serverside Rendering with React
 */
const { renderToString } = require("react-dom/server");
require("@babel/register")({
  extensions: [".jsx"],
  presets: ["@babel/preset-react"],
});
const myFirstApp = require("./my-first-react-app/App.jsx");

app.get("/my-first-react-app", (req, res) => {
  const root = myFirstApp();

  console.log(root);
  for (c in root.props.children) {
    console.log(root.props.children[c]);
  }

  const html = renderToString(root);

  res.send(`<!DOCTYPE html>
    <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <div id="app-root">
              ${html}
            </div>
        </body>
    </html>`);
});

/**
 * SECTION 3: Serverside Rendering with Hydrate on Clientside
 */
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);
app.use(middleware(compiler));

app.get("/my-first-react-counter", (req, res) => {
  const root = myFirstApp();
  const html = renderToString(root);

  res.send(`<!DOCTYPE html>
    <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <div id="app-root">${html}</div>
            <script src="/bundle.js"></script>
        </body>
    </html>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});