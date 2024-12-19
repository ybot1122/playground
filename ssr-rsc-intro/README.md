# SSR and RSC Intro

Hi. In this lesson, I will provide an overview of Serverside Rendering, React Server Components, and how they can be used together. It is important to disambiguate the two concepts, as they are intended to solve different problems and therefore should be see an as complementary or optional to each other. Using Serverside Rendering does not mean you have to use React Server Components and vice-versa.

In this lesson, we will:

- Create our own serverside rendering using Express.
- Create our own serverside rendering with React Server Components
- Study and compare the differences in the payloads and bundling that happens, and what the server vs client does in each case.

Let's get started.

# SECTION 1: My First Server Side Rendering

At the most basic, server side rendering is something that generates HTML during runtime on the server, and delivers it to the client. So in my example, you see the most straightforward example of serverside rendering: I generate a string containing HTML and insert my dynamic content in to the string. The string is then delivered to the client as HTML.

In my example, `localhost:3000/tell-me-the-time` will render an HTML page with the server's timestamp. Refresh and you will get a new timestamp. I included different HTML tags to demonstrate the the browser is indeed parsing the response as valid HTML.

Congratulations. Serverside Rendering.

# SECTION 2: Server Side Rendering with React

Now we will beef up our server side rendering, and add support for React! The magic sauce is:

```jsx
const { renderToString } = require("react-dom/server");
```

You can look up the [docs](https://react.dev/reference/react-dom/server/renderToString) for this method. We give it a React component, and it will return the HTML of the React tree as a string.

But Wait!

I will also have to add some transpilation. Right now, if I write JSX, the server will crash on start because it does not recognize JSX format. `SyntaxError: Unexpected token '<'`

So the next import does this for me. Babel will now automatically transpile JSX on the fly.

```jsx
require("@babel/register")({
  extensions: [".jsx"],
  presets: ["@babel/preset-react"],
});
```

Now, I can import my React component.

```jsx
const myFirstApp = require("./my-first-react-app/App.jsx");
```

And I can pass it into `renderToString`, get a string, and send that as HTML in my response.

```jsx
const root = myFirstApp();
const html = renderToString(root);

res.send(`<html><body> ... ${html} ...</body>`);
```

Visit `localhost:3000/my-first-react-app` to see our beautiful React app. Take a look at the React code in `my-first-react-app`. I'm passing props, using the `style` prop, and even some composition. Everything's looking great until...

Until you try clicking the increment button on the counter. Nothing happens. But if you look at the code, I'm using `React.useState()` and `button onClick` to update the counter. What happened?

Right now the client only has raw HTML. It does not have any javascript, so it is not able to "hook up" my interactive component to React features. What we need to do is send some Javascript to the client, and tell it to hook up my component to React. This is the "hydration" step you might have heard of. Indeed, this is more magic sauce from the `react-dom` package. We will do that in the next section.

# SECTION 3: Hydrating our React App

So we have HTML on the clientside, but the interactive Counter component is not working because there is no Javascript. What is our solution? We will use another API from `react-dom`:

```jsx
ReactDOM.hydrateRoot(document.getElementById("app-root"), <App />);
```

Take a look at the file `client.js`. There I have written a script: It imports react, react-dom, and the App, then it makes the `hydrateRoot` call. This script needs to run on the client, after the initial HTML is rendered.

I use webpack to bundle this `client.js` file and output a `bundle.js` file which contains all the source code of React, React DOM, my React Components, in a single file.

Then in the HTML, I add a new line:

```html
<script src="/bundle.js"></script>
```

When the client renders the HTML, it will then run into this line and download and run my `bundle.js` script. That script will run `hydrateRoot()` and if all is correct, my interactive counter component should be working.

Check it out at `localhost:3000/my-first-react-counter`.

Let's pause and see what we have accomplished: We are rendering React on the serverside, delivering that rendered HTML to the clientside, and then hydrating our application on the clientside so it can be fully interactive. Well done.

In the next section, we will add streaming to our project.

# SECTION 4: Streaming with `renderToPipeableStream`

In the previous section we rendered our HTML all at once, then delivered all the HTML all at once to the client. Streaming now makes it possible do deliver the HTML to the client in chunks. The advantage is that the client can start processing those chunks immediately. So instead of waiting for all the HTML to be downloaded, it can receive a chunk of HTML, process/render it, receive a chunk of HTML, process/render it, etc etc.

This is made possible in Node.js with `react-dom/server`'s `renderToPipeableStream` [method](https://react.dev/reference/react-dom/server/renderToPipeableStream)

# Additional Resources
- Implement ssr: https://www.youtube.com/watch?v=NwyQONeqRXA
- RSC vs SSR: https://www.youtube.com/watch?v=jEJEFAc8tSI
- RSC nitty-gritty: https://www.plasmic.app/blog/how-react-server-components-work#life-of-an-rsc-render
- RSC from scratch: https://www.youtube.com/watch?v=MaebEqhZR84&pp=ygUocmVhY3Qgc2VydmVyIGNvbXBvbmVudHMgZnJvbSBzY3JhdGNoIGJlbg%3D%3D
- New Suspense SSR Architecture in React 18: https://github.com/reactwg/react-18/discussions/37