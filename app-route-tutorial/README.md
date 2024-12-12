### Welcome.

This is a tutorial to the NextJS App Router

### Let's Get Started

1. `npm install`
2. `npm run build`
3. `npm start`

### Home Page 

The Next.JS App Router is **filesystem based**. So instead of writing a config or mapping strings/regex to a Page Component, we use folders to create our routes.

Our root route (`localhost:3000/`) is defined in `src/app/page.tsx`. So when you load the home page, that is where you write the contents.

Notice there is `layout.tsx` next to the `page.tsx`. In Next.JS App Router, this `layout.tsx` will now wrap around all the pages in this route, and all of its children routes. In this case, I put the Nav Bar in layout.tsx; Now all routes will have this Nav Bar.

### About, Contact, Services Pages

As you click around the navigation bar, you will notice we also have the routes `/about`, `/contact`, and `/services`. 

You can see these routes defined by their folder names in `src/app/about`, `src/app/contact` and `src/app/services`. Notice that each of these folders has a `page.tsx` file. This is required.

> By default, `page.tsx` is rendered on the server. The component you export in `page.tsx` is indeed a React Server Component!

### More Services

Navigate to the Services page. In that page, click around to some of the other services that are offered by this company. Notice that these pages are nested under the `/services/` directory. So now you see nested routes in action. Also notice there is a `layout.tsx` that all the pages in `/services/***` will render. As you can see, we can also use nested `layout.tsx`.

### Handling 404

While on the services page, notice that the Investment Services button leads to a not found page. This is another unique file we can put in our folders. Next.JS will automatically use this if the user hits a route that is not defined. It can also be nested. Try going to localhost:3000/oogabooga and you will see the top-level `not-found.tsx` file instead.