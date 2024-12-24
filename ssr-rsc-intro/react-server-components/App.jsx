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
    <div>
      <h1>Comments</h1>
      {comments}
    </div>
  );
};

async function getComment(commentId) {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(`I am comment #${commentId}`), 1000 * commentId);
  });
  return data;
}

async function Comment({ commentId }) {
  const data = await getComment(commentId);

  return <div>{data}</div>;
}
