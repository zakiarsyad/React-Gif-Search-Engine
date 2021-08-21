import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./containers/Home";
import IronManGiphy from "./containers/IronManGiphy";
import SearchYourGiphy from "./containers/SearchYourGiphy";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/iron-man-giphy">
            <IronManGiphy />
          </Route>
          <Route exact path="/search-your-giphy">
            <SearchYourGiphy />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
