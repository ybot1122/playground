const React = require("react");

const fetchData = function (commentId) {
  console.log("fetching");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `Fetched data for comment # ${commentId}` });
    }, 1000 * commentId);
  });
};

module.exports = function ({ commentId }) {
  const promise = fetchData(commentId);
  const { data } = React.use(promise);
  return data ? <div>{data}</div> : null;
};
