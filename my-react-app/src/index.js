import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import css from "./index.css";

ReactDOM.render(
    <React.StrictMode>
		<App style={css}/>
    </React.StrictMode>,
    document.getElementById("root")
);
