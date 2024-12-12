### Welcome.

This is a tutorial to the NextJS App Router

### Let's Get Started

1. `npm install`
2. `npm run build`
3. `npm start`

# Intro

This project and README.md will guide you through some basics of the Next.JS App Router. Please know there are many different concepts that come to play simultaneously in this framework, so I will try my best to explain the App Router while also explaining other features.

One important thing to understand is that when you use Next.JS App Router, then by default you are automatically using React Server Components. Additionally, by default you are taking advantage of NextJS Streaming components. These concepts will be expanded upon later.

Also: This tutorial is for learning the Next.JS App Router. If you need to learn about Next.JS Pages Router, or want to compare between using Next.JS App Router vs Page Router, that will **not** be covered here. A good comparison between the two can be found [here](https://medium.com/@jawaragordon/choose-your-own-adventure-next-js-app-vs-pages-router-528dbf25b37f).

Let's run the app and start with the basics.

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

Go back to our About page. As you can see it is a blog style page, with articles and article IDs. Click each of those articles and notice that the route name is printed on the screen.

In our code, you can see this is done with dynamic routes. You create a folder with square brackets like `[articleId]` and then in the `page.tsx` file you can access the string in that field via the `params` props that NextJS provides automatically.

As usual, you can nest these. Try commenting, bookmarking, or liking the article. Notice the URL, and notice that our file structure has multiple `[paramName]` folders to accomplish this.

You can also create catch all routes with a folder like this: `[...slug]`. Go to the About page click "go down the rabbithole" to see how this works.

And finally you can make a dynamic route optional with double square brackets like this: `[[optionalSegment]]`. So if your directory structure is like this: `app/shop/[[optional]]/page.tsx` then `localhost:3000/shop` and `localhost:3000/shop/item1` will render the `page.tsx`.

# That is the App Router Basics

This was a crash course on the absolute basics of NextJS App Router. In the next lesson, we will go over the more advanced features: Parallel Routes and Intercepting routes. Additionally, we will start talking about the `loading.tsx` file that you can take advantage of.

# Understanding React Server Components

Earlier in this tutorial, I mentioned that every `page.tsx` we wrote here is indeed a `React Server Component`. This is an important difference when using App Router versus Page Router. In the next tutorial, you will see that we now have to be very explicit that a component is a Client Component by writing `"use client"` at the top of the component file.

Understanding this directive is crucial to maximizing the value from App Router. Otherwise you can very easily miss out on optimizations that RSC and App Router are supposed to give you.
