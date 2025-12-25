// Resposive design , Responsive design is a way of designing websites so they look good and work well on any device or screen size.
// Use a Flexible Layout
// Instead of fixed pixels, use percentages, em, rem, or CSS Grid/Flexbox.

// Make Images and Media Flexible
// Images shouldn’t overflow the screen:

// Use Media Queries
// Media queries let you change styles based on screen width:



// BOM, ye ek object jo hame ek facility provide karta hai ki hmm browser se interect kar sake
// The Browser Object Model (BOM) is a set of objects provided by the browser that allows JavaScript to interact with the browser itself, not just the content of the web page (that’s handled by the DOM, or Document Object Model).

// DOM → controls the content inside the webpage (like HTML elements).
// BOM → controls the browser window and its features (like alerts, URLs, history, etc.).

// The DOM (Document Object Model) is like a blueprint of your web page that JavaScript can use to see and change the page.




// React is a JavaScript library for building user interfaces (UIs), mainly for web apps.
// It was created by Facebook.


// Need :
// Single page application means load data at one and then render efficiently when we need
// Dynamic data that updates frequently
// Large apps with multiple developers
// Apps that need reusable and maintainable UI
// Component-based architectureEfficient rendering (Virtual DOM)
// React updates only the parts that changed, not the whole page.
// Improves performance for big apps.

// React Compontent: A React component is a reusable piece of UI.
// function vs component
// A block of code that performs a task or returns a value.
// A function that returns React elements (JSX) to describe UI.
// JSX is a way to write React elements in a syntax that looks like HTML.


// in js :
// Node = any item in the DOM tree
// Element = a type of node that corresponds to an HTML 
// tag =  tag is a special piece of markup used to define the structure the webpage


// Important: A React element is not the actual DOM element. It’s just a description. React later uses this description to create or update the real DOM.

// React Element: A plain object representing a DOM node or ui node . or diagram showing React element → Virtual DOM → Real DOM
// React Component: A function or class that returns React elements.


// The Virtual DOM (VDOM) is a lightweight copy of the real DOM kept in memory by React.
// React uses it to decide the most efficient way to update the real DOM.
// Instead of updating the real DOM every time something changes, React updates the Virtual DOM first.


// small visual diagram showing Virtual DOM → diffing → real DOM update
// Diffing is the process React uses to compare the old Virtual DOM with the new Virtual DOM when the state of an app changes.



// Old Virtual DOM:

// <div>
//   <p>Count: 0</p>
// </div>

// New Virtual DOM (after increment):

// <div>
//   <p>Count: 1</p>
// </div>


// Diffing result:
// Only the text inside <p> changed from 0 → 1.
// React updates just that text node in the real DOM.
// The rest of the DOM (<div> structure) remains unchanged.








