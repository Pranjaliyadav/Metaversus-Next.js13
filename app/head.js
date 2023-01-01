const Head = () => (
  <>
    <title>Metaversus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>
);

export default Head;

/*
We using next.js for this project
Next.js is a framework for building server-rendered react applications. its often
used for creating web applications that are rendered on the server and then hydrated on the client
hydration here means when the client side html is rehydrated using javascript rom server side and togethr
they make the expericne interactive and smooth, making SEO better abnd improved performance
next.js provides a set of inbuilt featuyes and apis that makes it easy to create and deploy react
applications with automatic code splitting, optimized performance, server-side rendering, and more
it also has a simple, lightweight api that allows developers to customize the behaviour of their app as needed

create-next-app 
nextjs uses pages diretory to define routes and components for your application
each file in pages directort corresponds to a route and the default export of the file
is a react component that will be rendered for that route

link component that can be used to create client-side navigatio between routes. when user click link
nextjs will use the next/router module to update the URL and load the new route without making a full page reload

we can add plugins to add functionaities eg typescript, sass etc
when deploying next build and next start



*/

/*
framer motion is a library for craeting animations and transitions in react apps.
it uses react syntax
always import motion from framer-motion
and then motion.div or .nav .button
import { motion } from 'framer-motion';

const MyComponent = () => (
  <motion.div
    animate={{ x: 100 }}
    transition={{ duration: 2 }}
  >
    Hello, world!
  </motion.div>
);

Here are some of the most important methods in Framer Motion that you might use while building an application:

animate: This prop allows you to specify the target styles for an animation. You can use it to animate any CSS property, as well as custom properties like scale or rotate.

transition: This prop allows you to specify the duration, easing, and other details of the animation.

variants: This prop allows you to define different "variants" of an animation, which are sets of styles and transitions that can be reused and mixed together.

initial: This prop allows you to specify the initial styles for an animation.

whileHover: This prop allows you to specify styles and transitions that should be applied while the mouse is hovering over the element.

whileTap: This prop allows you to specify styles and transitions that should be applied while the element is being tapped on a touch screen.

drag: This prop allows you to make an element draggable, with optional constraints and boundaries.

*/
