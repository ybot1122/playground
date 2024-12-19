const React = require("react");

module.exports = function () {
  const comments = [];

  for (let i = 0; i < 10; i++) {
    comments.push(
      <React.Suspense fallback={<div>Loading comment...</div>} key={i}>
        <Comment commentId={i} />
      </React.Suspense>
    );
  }

  return (
    <html lang="en-us">
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <div style={{ margin: "20px" }}>
          <h1>Here is a Big Comment Section</h1>
          {comments}
        </div>
      </body>
    </html>
  );
};

const fetchData = function (commentId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `Fetched data for comment # ${commentId}` });
    }, 1000 * commentId);
  });
};

const Comment = function ({ commentId }) {
  const { data } = React.use(fetchData(commentId));
  return data ? <div>{data}</div> : null;
};
