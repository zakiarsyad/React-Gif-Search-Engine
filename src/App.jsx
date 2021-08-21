import "./tailwind.css";
import Home from "./containers/Home";
import IronManGiphy from "./containers/IronManGiphy";
import SearchYourGiphy from "./containers/SearchYourGiphy";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
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
  );
};

export default App;
