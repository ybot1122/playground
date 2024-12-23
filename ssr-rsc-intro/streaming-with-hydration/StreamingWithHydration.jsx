const React = require("react");

module.exports = function () {
  const comments = [];
  const resource = [];

  for (let i = 0; i < 10; i++) {
    resource.push(fetchData(i));
    comments.push(
      <React.Suspense fallback={<div>Loading comment...</div>} key={i}>
        <Comment resource={resource[i]} />
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

const fetchData = (commentId) => {
  let status = "pending";
  let result;
  let fetching = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched data for comment # ${commentId}`);
    }, 1000 * commentId);
  }).then((data) => {
    status = "fulfilled";
    result = data;
  });

  return {
    read() {
      if (status === "pending") {
        throw fetching; // Suspend
      } else if (status === "rejected") {
        throw result; // Error
      } else if (status === "fulfilled") {
        return result; // Data
      }
    },
  };
};

const Comment = function ({ resource }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const data = resource.read();
  return data ? (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Open Comment
      </button>
      {isOpen && <div>{data}</div>}
    </div>
  ) : null;
};
