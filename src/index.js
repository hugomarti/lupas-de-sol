import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

const theme = {
  global: {
    colors: {
      brand: "#BD4628",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
