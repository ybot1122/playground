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
  console.log(`fetching comment ${commentId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `Fetched data for comment # ${commentId}` });
    }, 1000 * commentId);
  });
};

const Comment = function ({ commentId }) {
  const promise = fetchData(commentId);
  const { data } = React.use(promise); // What is `use()`? See comment below...
  return data ? <div>{data}</div> : null;
};

/**
From the [React docs](https://react.dev/reference/react/Suspense):

> Only Suspense-enabled data sources will activate the Suspense component. They include:
>
> - Data fetching with Suspense-enabled frameworks like Relay and Next.js
> - Lazy-loading component code with lazy
> - Reading the value of a cached Promise with use
> Suspense does not detect when data is fetched inside an Effect or event handler.
>

That means if you do this:

```jsx
const Component = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchMyData().then((result) => setData(result))
  }, []);

  return <div>{data}</div>
}
```

Then wrapping it with Suspense DOES NOTHING!

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <Component>
</Suspense>
```

You must use `lazy` or `use`.

If you have meta-framework like Next.js, they might have a special API you can use as well.
 */
