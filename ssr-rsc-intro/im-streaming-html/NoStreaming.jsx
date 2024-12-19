const React = require("react");
const Comment = require("./Comment");

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
    <div style={{ margin: "20px" }}>
      <h1>Here is a Big Comment Section</h1>
      {comments}
    </div>
  );
};
