import { Route, Switch } from "react-router";
import Cart from "../components/Cart";
import Home from "../components/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
