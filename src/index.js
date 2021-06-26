import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header, Activities, Routines, LoginRegister } from "./components";

const App = () => {
  const [activities, setActivities] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={"/routines"}>
          <Routines />
        </Route>
        <Route path={"/myroutines"}>
          <Routines />
        </Route>
        <Route path={"/activities"}>
          <Activities activities={activities} setActivities={setActivities} />
        </Route>
        <Route path={"/loginregister"}>
          <LoginRegister />
        </Route>
        <Route path={"/"} exact>
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
