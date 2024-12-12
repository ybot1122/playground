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