import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Header, Activities, Routines, LoginRegister } from "./components";

const App = () => {
  const [activities, setActivities] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/routines"}>
          <Header />
          <Routines />
        </Route>
        <Route path={"/activities"}>
          <Header />
          <Activities activities={activities} setActivities={setActivities} />
        </Route>
        <Route path={"/loginregister"}>
          <Header />
          <LoginRegister />
        </Route>
        <Route path={"/"} exact>
          <Header />
          <h3>Welcome Home Fitness Freak</h3>
        </Route>
        <Route>
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
