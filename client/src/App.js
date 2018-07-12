import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipes from "./pages/Recipes/Books";
import Ingredients from "./pages/Recipes/Ingredients"
import Detail from "./pages/Detail/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import RecipeDetail from "./pages/Detail/RecipeDetail";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Recipes} />
        <Route exact path="/books" component={Recipes} />
        <Route exact path="/" component={Ingredients} />
        <Route exact path="/ingredients" component={Ingredients} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/books/:id" component={RecipeDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
