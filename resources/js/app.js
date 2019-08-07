require("./bootstrap");
require("./components/Example");

import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Example from "./components/Example";

if (document.getElementById("example")) {
    render(<Example />, document.getElementById("example"));
}

console.log("Testando o React com laravel");
