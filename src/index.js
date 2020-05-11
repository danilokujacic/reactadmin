import React from "react";
import App from "./App";

import { render } from "react-dom";

const renderDiv = document.querySelector("#root");
render(<App />, renderDiv);
