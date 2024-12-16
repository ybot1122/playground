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

You can look up the docs for this method, but basically we give it a React component, and it will return the HTML of the entire React tree as a string.

But Wait!

I will also have to add some transpilation. Right now, if I write JSX, the server will crash on start because it does not recognize JSX format. `SyntaxError: Unexpected token '<'`

So the next import does this for me. Babel will now automatically transpile JSX on the fly.

```jsx
require("@babel/register")({
  extensions: [".jsx"],
  presets: ["@babel/preset-react"],
});
```

Again, you can look up the docs for `@babel/register`. Note that this is where fancy "meta-frameworks" will do different things to enhance developer experience and whatnot. Some may use tools other than Babel, and some may do offline / asynchronous transpilation instead of on-the-fly like I am doing here.

Anyways... now, I can import my React component!

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

Until you try clicking the increment button on the counter. Nothing happens. But if you look at the code, I'm clearly using `React.useState()` and `button onClick` to update the counter. What happened?

Well, right now the client only has raw HTML. It does not have any javascript whatsoever, so it was not able to "hook up" my interactive component to those React features. What we need to do is send some Javascript to the client, and tell it to hook up my component to React. This is the "hydration" step you might have heard of. Indeed, this going to be more magic sauce from the `react-dom` package. We will do that in the next section.

**OK COOL, BUT WHAT ABOUT RSC AND STREAMING AND...** we are getting there. Understanding these first few sections will help us understand everything else. Let me direct your attention to the server logs. You will notice that I added some console logs:

```jsx
const root = myFirstApp();

console.log(root);
for (c in root.props.children) {
  console.log(root.props.children[c]);
}
```

What is _actually_ being passed to `renderToString()`? Well turns it out, it is objects.

Here's how the top-level component is represented. Nothing crazy, right? You see the `props` and you see it has 4 items in its `children` array.

```js
{
  '$$typeof': Symbol(react.transitional.element),
  type: 'div',
  key: null,
  props: {
    style: { margin: '20px' },
    children: [ [Object], [Object], [Object], [Object] ]
  },
  _owner: null,
  _store: {}
}
```

Look at the `type` property. In the root object, it is `type: 'div'` which is simple. However, notice that some of the children actually have `type: [Function (anonymous)]`. There's one big problem with this: It is not **serializable**. You cannot "represent" a Function as a raw string, for example. Go ahead, try it:

```js
JSON.stringify({ func: () => console.log("a") });
// output: {}
```

Since Functions are not serializable, we cannot send this representation from server to client. The data will be lost. That is why, when we "hydrate" on the client, we essentially render then entire React tree again, on the client.

In later sections, we will see how RSC overcomes this by representing its components differently - in a format that is indeed **serializable**. This new representation is what then unlocks value from _streaming_ the data to the client.

So hang tight! This will all be very valuable to understanding RSCs later.

For now... onto the next section... Where were we? Oh yes, hydration. Let's make our Counter component interactive.

# SECTION 3: Hydrating our React App

So we have HTML on the clientside, but the interactive Counter component is not working because there is no Javascript. What is our solution? We will use another API from `react-dom`:

```jsx
ReactDOM.hydrate(<App />, document.getElementById("root"));
```
