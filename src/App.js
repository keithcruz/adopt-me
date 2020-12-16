import React from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </React.StrictMode>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
