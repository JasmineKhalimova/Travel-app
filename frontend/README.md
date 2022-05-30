# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Usefull React Terms

- useState: These are special functions provided by React library which helps managing state which is data when it changes which leads to the re-render cycle of the component which basically tells react to update real DOM if the data changes.

- useEffect: They let you use state and other React features without writing a class. The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional. useEffect(<function>, <dependency>)

- Compoents: React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. The Component Lifecycle => Mounting [constructor(), static getDerivedStateFromProps(), render(),componentDidMount()], Updating[static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()], Unmounting [componentWillUnmount()], Error Handling [static getDerivedStateFromError(), componentDidCatch()].

- Props(properties): Props are arguments passed into React components. Props are passed to components via HTML attributes. e.g.
```function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
const myElement = <Car brand="Ford" />;
```

- Presentational Components: a presentational component is a component that just renders HTML. The component's only function is presentational markup. In a Redux-powered app, a presentational component does not interact with the Redux store.

- Stateful Components:  a stateful component is a component that holds some state. Stateless components, by contrast, have no state. Note that both types of components can use props

- All the pages get displaid via App.js

- React Fragment allows you to nest many elements inside one return function.