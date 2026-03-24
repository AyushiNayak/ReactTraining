Here’s a summary of what you’ve done so far in your React training, based on your current code and questions:

### React Training Progress Notes

1. **React Setup in HTML**
   - Loaded React and ReactDOM via CDN in a plain HTML file.
   - Added Babel for JSX support in the browser.

2. **Basic React Rendering**
   - Used `React.createElement` to create React elements.
   - Rendered these elements into specific divs using `ReactDOM.createRoot(...).render(...)`.

3. **Passing Attributes**
   - Learned how to pass an `id` attribute to a div in React using the attributes object in `React.createElement`.
   - Example: 
     ```javascript
     React.createElement('div', { id: 'myDiv' }, 'Hello, React!');
     ```

4. **JSX Usage**
   - Used JSX syntax inside a `<script type="text/babel">` block for easier and more readable React code.
   - Example:
     ```javascript
     <div><h4>Hello, React Man!</h4></div>
     ```

5. **Rendering Multiple Components**
   - Rendered different React elements into multiple divs (`app2`, `app3`, `app4`) on the page.

6. **Nesting Elements**
   - Created nested React elements (e.g., a `div` containing an `h4`).

7. **Babel Compiler**
   - Babel is the tool that converts JSX syntax to regular JavaScript.
   - Used with `<script type="text/babel">` in HTML files.

8. **React Components**
   - A component is a reusable, self-contained piece of UI in React.
   - **Function Component:** A JavaScript function that returns JSX.
   - **Component Naming Rule:** Component names MUST start with a CAPITAL letter (e.g., `MYCOMPONENT` not `myComponent`).
   - **Creating a Component:**
     ```javascript
     function MYCOMPONENT() {
       return <h1>Hello, I am a React Component!</h1>;
     }
     ```
   - **Rendering a Component:** Use JSX to render it like an HTML element:
     ```javascript
     ReactDOM.createRoot(document.getElementById('app5')).render(<MYCOMPONENT />);
     ```
   - **Benefits of Components:**
     - Reusability: Use the same component multiple times.
     - Organization: Break UI into smaller, manageable pieces.
     - Maintainability: Easier to update and debug.

## Key Concepts Summary
- **JSX:** HTML-like syntax that Babel converts to JavaScript function calls.
- **React Elements:** Objects created by `React.createElement()` or JSX expressions.
- **Components:** Functions that return JSX, enabling code reuse and modularity.
- **Rendering:** The process of displaying elements/components in the DOM.

React Project -
    1. Compiler - Babel/TS/SWC
    2. Package Manager - npm
    3. Linter - eslint/tslint
    4. Unit Test - jest/cypress
    5. Bundler - Webpack/Rollup/Turbopack


    Popular Toochain required for creating react app-
        1. Next js preffered
        2. CRA(create react app)
        3. Remix
        4. Vite
        5. React Native - React Native is an open-source framework developed by Facebook for building mobile applications using JavaScript and Reac

SWC- speedy web compiler- fast (instead of babel)

Turbopack - new - build tool(webpack replacement)

React Component -
    1. Property/state
    2. JSX Code - HTML to render
    3. Application Logic - view model or controller(event handlers)

Types Of components -
    Functional
        Presentational
        Stateless till react 16.8
        Stateful(using react hooks)
    Class Based obsolete react 19
        containers
        stateful

React Component - jsx intrinisc componnet lower case
custom component upper case.

Types of component -
based on renderng 
    1.client side render csr
    2. sercer side render ssr

with next js defaullt rendering is SSR
in vite or csa - default rendering is csr

component dynamic content -

most components can web parametrzied , we use props for this.
<MyComp text="hello"> = text would be aviable in component as props


React Component props - 
    1.parameterize a component
    2. paasing info parent to child and vice versa
        parent->child(props)
        child->parent(props callback)
    3. changes to props will re render the componet
    4. when we pass props from parent to child , we cant change the props

Handling events -

JS
function foo(){

}
<button onclick="foo()"></button>

react-

<button onClick = {foo}></button>

Component State-
    state holds info about the component.
    state is used to keep track of info between renderings.
    state is created and initialsied in component itself.
    state changes , component re renders.
    state changes are asynchronous
    state changes are executed in batches
    - setState
        setState(updateValue)
        setState(callback) updateValue callback - invoke the callback with previosValue
        ex - setCount((prevCount) => prevCount + 5);
    In a input field - if u want to read the value
        - binding using state(useState) =>value , onChange ----> Controlled Input
        - refernce to the input (useRef) to the input and read ----> UnControlled Input



React Hooks -
    was introduced in version 16.8
    since we dont use class after that (we used to have state , lifecycle etc there itself)

    React hooks let us use state and othe react faetures with functional components.

    State Hooks(useState) - equivalent of state in class  based components
    Effect Hooks(useEffect)
    context hooks
    callback hooks
    mmeo hooks
    ref hooks useRef
    custom hooks

Destructuring:
const arr = [1,2,3]
const a = arr[0]
const b = arr[1]

//destructuting
const[a,b] = arr

const user ={
    id:1,nane:"Anil"
}
const {id,name} = user

public - images icons etc
src folder gets compiled

# Navigation in react
    - There are no APIs that react provides for navigation.
    - 3rd party library used for router navigation - react-router-dom (used in react apps using create-react-app, vite)
    - Next.js has a navigation library on its own.

# Next Js Routing
    - This has File based routing
    - Two types of routing systems
        - app router newer from nextjs 13
            - server components by default   
            -nested layouts and parallel routes etc
            - src/apps
            -app
                -api
                    - users
                - dashboard
                    - layout.tsx
                    - page,tsx
                    -loading.tsx
                    -error.tsx
                    -anaylystics/
                        - dashboard
                        - layout.tsx
                        - page,tsx
                        -loading.tsx
                        -error.tsx
        - page router - for leagcy apps
            - src/pages


<Hello message="test"/>
<Hello message="test">Test</Hello>

function Hello(props:HelloProps){

    //props.message
    //props.children
}
function Hello({ message, children }){ //destructuring

    //props.message
    //props.children
}

React Optimisation
    - components are granular (small components)
    

# React Hooks:-
    State Hooks
    Effect Hooks
    Context Hooks