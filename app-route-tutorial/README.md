### Welcome.

This is a tutorial to the NextJS App Router

### Let's Get Started

1. `npm install`
2. `npm run build`
3. `npm start`

# Intro

This project and README.md will guide you through some basics of the Next.JS App Router. Please know there are many different concepts that come to play simultaneously in this framework, so I will try my best to explain the App Router while also explaining other features.

One important thing to understand is that when you use Next.JS App Router, then by default you are automatically using React Server Components. Additionally, by default you are taking advantage of NextJS Streaming components. These concepts will be expanded upon later.

For now, let's run the app and start with the basics.

# Home Page 

The Next.JS App Router is **filesystem based**. So instead of writing a config or mapping strings/regex to a Page Component, we use folders to create our routes.

Our root route (`localhost:3000/`) is defined in `src/app/page.tsx`. So when you load the home page, that is where you write the contents.

Notice also the `layout.tsx` next to the `page.tsx`. In Next.JS App Router, this `layout.tsx` will now wrap around all the pages in this route, and all of its children routes. In this case, I put the Nav Bar in `layout.tsx`; Now all routes will have this Nav Bar.

# About, Contact, Services Pages

As you click around the navigation bar, you will notice we also have the routes `/about`, `/contact`, and `/services`.

You can see these routes defined by their folder names in `src/app/about`, `src/app/contact` and `src/app/services`. Notice that each of these folders has a `page.tsx` file. `page.tsx` is required., otherwise we would get a 404.

By default, `page.tsx` is rendered on the server. The component you export in `page.tsx` is indeed a **React Server Component**!

# More Services

Navigate to the Services page. In that page, click around to some of the other services that are offered by this company. Notice that these pages are nested under the `/services/` directory. So now you see nested routes in action.

Also notice there is a `layout.tsx` that all the pages in `/services/***` will render. As you can see, we can also use nested `layout.tsx`.

# Handling 404

Did you click on the "Investment Services" link? That leads to a not found page. This is a unique file we can put in the root directory. Next.JS will automatically use this if the user hits a route that is not defined. As you can see in our `app` directory, we do not have a `app/services/investment` folder defined, so that is why this page got a 404!

Looks like this website is not ready for production...

# Dynamic Routes

Go back to our About page. As you can see it is a blog style page, with articles and article IDs.

# Contact Page

Look at the code for the contact page. Notice there is a child component `ContactForm` being imported. Look at that component, and notice the `use client` directive at the top of the file. This is an important concept we must understand when using App Router (and therefore using React Server Components).