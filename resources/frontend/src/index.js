import {React,ReactDOM,BrowserRouter,Provider} from "./components";
import App from "./App";
import { Store } from "./reduxStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);
