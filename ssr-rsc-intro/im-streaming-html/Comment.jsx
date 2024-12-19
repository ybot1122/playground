const React = require("react");

const fetchData = function (commentId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `Fetched data for comment # ${commentId}` });
    }, 1000 * commentId);
  });
};

module.exports = function ({ commentId }) {
  const { data } = React.use(fetchData(commentId));
  return data ? <div>{data}</div> : null;
};
