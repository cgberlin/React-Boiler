import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";
import { Router, browserHistory, IndexRoute } from "react-router";
import routes from "./routes";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./components/App";

let store = createStore(reducer, applyMiddleware(thunk));
injectTapEventPlugin();
document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Provider store={store}>
            <Router routes={routes} history={browserHistory} />
        </Provider>,
        document.getElementById("root")
    );
});
