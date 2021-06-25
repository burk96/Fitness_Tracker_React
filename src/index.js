import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { ProofOfConcept } from "./components";

const App = () => {
  const [activities, setActivities] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/activities"}>
          <ProofOfConcept
            activities={activities}
            setActivities={setActivities}
          />
        </Route>
        <Route path={"/"} exact>
          <Link to={"/activities"}>Activities</Link>
        </Route>
        <Route>
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
