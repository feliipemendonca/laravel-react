import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRoute, Route, Switch } from "react-router-dom";
import Header from "./Header";
import ProjectList from "./ProjectList";

class App extends Component() {
    render() {
        return (
            <BrowserRoute>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ProjectList} />
                    </Switch>
                </div>
            </BrowserRoute>
        );
    }
}

ReactDom.render(<App />, documente.getElementId("app"));
