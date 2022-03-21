import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/cart"}>
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
