const React = require("react");

module.exports = function () {
  const comments = [];

  for (let i = 0; i < 10; i++) {
    comments.push(<Comment commentId={i} key={i} />);
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1>Here is a Big Comment Section</h1>
      {comments}
    </div>
  );
};

const fetchData = function (commentId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched data for comment # ${commentId}`);
    }, 1000 * commentId);
  });
};

const Comment = function ({ commentId }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetchData(commentId).then((result) => setData(result));
  }, [commentId]);
  return data ? <div>{data}</div> : <div>Loading...</div>;
};
