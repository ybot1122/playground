# SSR and RSC Intro

Hi. In this lesson, I will provide an overview of Serverside Rendering, React Server Components, and how they can be used together. It is important to disambiguate the two concepts, as they are intended to solve different problems and therefore should be see an as complementary or optional to each other. Using Serverside Rendering does not mean you have to use React Server Components and vice-versa.

In this lesson, we will:

- Create our own serverside rendering using Express.
- Create our own serverside rendering with React Server Components
- Study and compare the differences in the payloads and bundling that happens, and what the server vs client does in each case.

Let's get started.

# My First Server Side Rendering

At the most basic, server side rendering is something that generates HTML during runtime on the server, and delivers it to the client. So in my example, you see the most straightforward example of serverside rendering: I generate a string containing HTML and insert my dynamic content in to the string. The string is then delivered to the client as HTML.

In my example, `localhost:3000/tell-me-the-time` will render an HTML page with the server's timestamp. Refresh and you will get a new timestamp. I included different HTML tags to demonstrate the the browser is indeed parsing the response as valid HTML.

Congratulations. Serverside Rendering.

# Server Side Rendering with React