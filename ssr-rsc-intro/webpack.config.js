const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./my-first-react-app/client.js"),
    suspense: path.resolve(__dirname, "./im-streaming-html/client.js"),
    suspenseHydrated: path.resolve(__dirname, "./im-streaming-html/client2.js"),
    suspenseHydratedWorking: path.resolve(
      __dirname,
      "./streaming-with-hydration/client.js"
    ),
    rsc: path.resolve(__dirname, "./react-server-components/client.js"),
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  mode: "development",
  stats: "minimal",
};
