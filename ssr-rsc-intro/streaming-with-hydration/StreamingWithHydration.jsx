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
  if (typeof window !== "undefined") return new Promise(() => {});

  console.log(`fetching comment ${commentId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched data for comment # ${commentId}`);
    }, 1000 * commentId);
  });
};

const Comment = function ({ commentId }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const promise = fetchData(commentId);
  const data = React.use(promise);
  return data ? (
    <div>
      {data}
      <button onClick={() => setIsOpen(!isOpen)}>Open Comment</button>
      {isOpen && <div>You opened the rest of the comment for {commentId}</div>}
    </div>
  ) : null;
};
