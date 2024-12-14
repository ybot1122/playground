const express = require("express");
const app = express();
const port = 3000;

/**
 * SECTION 1: Your First Serverside Rendering
 */
app.get("/tell-me-the-time", (req, res) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedDate = formatter.format(Date.now());

  res.send(`<!DOCTYPE html>
    <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <p>You know what <strong>TIME</strong> it is???.</p>
            <div>
                <h1>hammer time</h1>
                <h3> jk... server time is: <pre>${formattedDate}</pre></h3>
            </div>
        </body>
    </html>`);
});

/**
 * SECTION 2: Serverside Rendering with React
 */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
