import React from "react";
import { render, hydrate } from "react-dom";
import Loadable from "react-loadable";
import * as serviceWorker from "./serviceWorker";
import { LoadingComposer } from "./app/components";

const LoadableApplication = LoadingComposer({
  loader: () => import("./BootstrapApp"),
  delay: 200,
  timeout: 10000
});

const root = document.querySelector("#root");

if (root.hasChildNodes() === true) {
  // If it is an SSR we use hydrate to get fast page load attaching even listeners after the initial render

  Loadable.preloadReady().then(() => {
    hydrate(<LoadableApplication />, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(<LoadableApplication />, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
