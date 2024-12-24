const React = require("react");
//const Counter = require("./Counter");

module.exports = function () {
  return (
    <div>
      <h1>Comments</h1>
      <React.Suspense fallback={<div>Loading comments...</div>}>
        <Comments />
      </React.Suspense>
    </div>
  );
};

async function getAllComments() {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(["comment1", "comment2", "comment3"]), 2000);
  });
  return data;
}

async function Comments() {
  const comments = await getAllComments();

  return (
    <ul>
      {comments.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}
