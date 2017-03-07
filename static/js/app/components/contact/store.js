import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers }  from 'redux'
import counterApp from './reducer'
import MainComponent from './MainComponent'
import { Router, Route, browserhistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'



const store = createStore(
    combineReducers({
        global: counterApp,
        routing: routerReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_());

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MainComponent}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
)
