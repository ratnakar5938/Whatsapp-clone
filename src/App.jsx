// default import
// eslint-disable-next-line 
import React, { useState } from "react";

// libraries
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// stylesheet
import "./App.css";

// components
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
    // eslint-disable-next-line 
    const [{ user }, dispatch] = useStateValue();
    const history = createBrowserHistory();
    return (
        // BEM naming convention
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Router history={history}>
                        <Sidebar />
                        <Switch>
                            <Route path="/rooms/:roomId">
                                <Chat />
                            </Route>
                            <Route path="/">
                                <Chat />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
