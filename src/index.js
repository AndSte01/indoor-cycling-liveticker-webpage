// react basics
import ReactDOM from "react-dom";

// styling
import "./index.scss";

// App
import App from "./App.js"

// Service Worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Redux
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById("root")
);

serviceWorkerRegistration.unregister();
//serviceWorkerRegistration.register();