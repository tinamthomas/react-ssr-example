import * as React from "react";
import * as ReactDOM from "react-dom";

import Main from './components/Main';

ReactDOM.hydrate(
    <Main/>,
    document.getElementById("example")
);