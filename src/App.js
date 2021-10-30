import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js"
import About from "./pages/About.js"


const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
