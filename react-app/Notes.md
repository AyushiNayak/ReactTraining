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
    - be very careful using states , only for those props which require componnet rerender on change


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

    App Router APIs (anything with use is hooks)
        usePathname()
        useSearchParams()
        useRouter() - next/navigation(app router)
                    - next/router (page router)
        useParams()

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

component which has to be rendered has to be export default component

# React Hooks:-
    State Hooks
    Effect Hooks - use to perform side-effects in functinal component.
                    equivalent to 
                 - hook into lifecycle
                  - useeffect gets called after page is mounted
                 - mount - called once on the componnet is mounted
                         - dependency array is empty
                         - Uasge - API Calls ,
                                 - DOM Initilisation  
                                 - Register to any event

                - unmount - called once on the componnet is unmounted
                        - cancel the api call
                        - unregister to any events
                 - we can have multiple useeffetc in one page.
                 - dependecy array is neccesay so that My Effect doesnt runs after every re-render 
                 - we pass state in dependevy array, it will run on that state change

    Context Hooks

# API Calls
    - React does not provide in built library for API calls
    - common libraries
        - Axios
        - fetch
    Fetch is part of w3c specification and is supported by all modern browers
    Axios open source library based on XMLHttpRequest  XHR object with lot of features.

    # Axios
        Promise based http client for browser
        client side support for protecting against XSRF
        intercept request response
        cancel request

        router.push
        router.back()

# Component LifeCycle
    Mount(once) -> Update -> UnMount(once)

Read about spread opeartor-
js spread operator - const arr1 = [...arr]


# More react hooks-
    React Optimisation
        - components are granular small
        - memoization 
            - like caching
            React.memo(this is for a component)
            component re-renders only if props or state change
            by default after react 19 , child components are memoised
           - if we want to specific memoisation - export const ProductView: React.FC<ProductViewProps> = React.memo(({ product }) => {
           - techniacally when parent renders - child should rerender but in productview its not happening , but since reactCompiler was true memomisation was happening , if we do it false it will rerender again.
            - till the time we are paasing only props from parent to child , mmeoisation works
            when we added local fucnions edit and delete , these fucntions will get recreated(there memory address change) on componnets render even on memoisation
            so component gets rerdenerd
            - now if we want to resolve this we have a hook called **Callback , so that even if parent component get rerender
            child componnet wont get rendered , till the time theer is no change on these functions.

            exmaple - 
                        const editProduct = useCallback(async (id: number) => {
                            console.log("Edit product with id:", id);
                            router.push(`/products/${id}`);
                            
                        },[products]);

for passing parent to child - props
for passing child to parent - fn callbacks

        - Memo Hooks
            - like how we have usecallback memo for callback fns in componet 
            we have useMemo for normal fns in componnet 

            example - 
            
                    const calculateTotalCost = useMemo(() => {
                        console.log("Calculating total cost for products:");
                        return products.reduce((total, product) => total + product.price, 0);
                    }, [products]);

        - ref hooks
        - custom hooks
            are meant to provide reusable component wise logic
            a function 
            user other hooks
        WHEN WE USE USEEFFECT , IN UNMOUNT WE NEED TO UNREGSITESR APIS 
            const  controller = new AbortController();
            const response = await axios.get<Product[]>("http://localhost:9000/products", { signal: controller.signal });

## State Management
    state sharing b/w 2 components
    - React Context - available from react 16.3
    - React Redux - 
    - MOb
    - Rxjs

    ### Local UI State - show hide ui , handled by component
    ### Persistent state - orders/blogs - stored in db
    ### Client State - iAuthenticated , Filter Info - Managed by redux or react context

    Session State(in browser)
        -LocalStorage & SessionStorage
        -Cookies
        - In Memory

### Redux-
                Global State
               App
                !
          Users         Customers
            !               !
           ---              ---
           !  !             !  !
        Auth   Dashboard   list edit

        In REdux flow - we have a central Store
        In redux - actions is an object with a type and a payload
                -{type:"save_token",token:"abc"}
                -{type:"clear_token"}

                - REducer is a function (receives actions & updates store) - central store updated
                - always synchronous(cannot make an api call or other async task)
     componet -    Dispatch an Action ---- recieved by an Reducer --- updates central store -- triggers - subscription -- pass update state to componnet

     1.react redux to intregarte to redux.
        -comprises of components & function
        - Providers:components to integrate the store with react application
        - Hooks
            - useDispatch: returns dispatach method
            - useStore: return a refernce to store
            - useSelector: return a subset(of the state) in redux and subscribe to store.

    2. Redux Toolkit 
        - implemennt of redux patterns
        - opiononted framework
        - slices => alternative to reducers
            - treat state as mutable
            - generates the reducer code(we would still have reducer slices take care of that)
            - geneartes action creators (action creators are helper fn to crate a action)
    3. Other State Managemnet Libraries:
        - react context
        - Zustand(recent , its very light weight)
        - MobX

  React context
    *context provides a way to pass data thro componnet tree without need to pass props down manullly at every level.
    * example of property to be passed down
        - theme
        - locale
        - authenticated user
    API - React.createContext()
    - state management
    - React 16.3
    - compared to redux
        - low level api (app need manage state)
        - there can be multiple contexts vs in redux a single store


### Redux Middleware
    after we dispatch the action , redux middleware intercepts and then fwds to reducer
    since reducers cant do api calls  we use redux middleware
    libraries
    - redux thunk
    - redux saga
    - redux logger

    for persisting data in redux in browser storage, library is there redux-persist

### LAZY LOADING 
In nestjs or vite , lazy loading is already in built ,chunks gets fetched when we navigate to that component
IN CRA WE NEED TO TAKE CARE

### Client Components
    rendereed and hydrated in the browser
    REBN

### Server Components
    rendered on server with no client-side js.
    available on 
    NO INTERACTIVITY WITH BROWSER FOR SERVER SIDE COMPONENT
    AVAILABLE FROM NEXT JS 13
    CANNOT USE CLIENT SIDE HOOKS LIKE USE EFFECT ETC
    GRAET FOR STATIC CONTENT NOT INTERATRCIVE ui
    NO JS IS SENT TO CLIENT RESULTING IN BETTER PEROFORMACE
    WORK ALONG WITH SIDE CLIENT SIDE COMPONENTS
    BETTER PERF
    DATA FETCHING
    RENDERING HEAVY uiS
    CACHING

    Limitations-
        No Interactivity
        LImited access to browser apis(window , localstorage etc)

export const metadata: Metadata = {
  title: "Awesome App:Customers",
  description: "Listed of customers",
  keywords:["global customers,tech companies,fortune 500"]
}; we give keywords , for SEO


### Server Side Rendering



### Static Site Generation
   pre rendering method pages are genearted at build time
   ssg is fast prebuilt static html with minimal server side processing
   content is static doesnt change with each request.

### SSR in App router
    -if componnet inclused asycnhronous data fetching or dynmaic data is fetched on every request
    This ensures fresh data is rendered for every request
    - caching is diabled on fetch apis
    - use any dynamic APIs
        cookies header connecion
    Forec enable SSR
     to make ssg - 
     export const dynamic = 'force-dynamic'
    const contentTypeHeader = (await headers()).get("Content-Type") || "application/json";
put no cache
    If none of this is met it becomes SSG

### Incremental Static REGeneration(ISR)
    -ISR allows u to update static pages after they have been built without needing to rebuild
    -Like SSG ISR builds initial HTML at  build
    - these file are served to users with pre fetched data making site fats
    - with isr u can speccify revaliate time , so that component gets refetched in the background for next request.

### Suspense and Streaming for srever components
    - Suspense in react allows to handle async operations(like data fetching) by provding mechanihsm to pause rednering till data is
    available
    - it lets u display a fallback UI while waiting for async tasks.
    - when a componnet is wrapped in <suspense> , react can "suspend" rendering until data or resource required by componnet
    is fullly loaded.

### Parallel Fetch in server components

### NextJs backend API
    Nest js is a full stack framework
    API Routes: TRADITIONAL WAY USING PAGE ROUTER
    rOUTE hANDLERS:
        Route handlers are used to define API endpoints using app router
        serverless arch
        route handler live in app/api directory
    sERVER aCTIONS:
