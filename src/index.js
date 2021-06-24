import React, { useState } from "react";
import ReactDOM from "react-dom";

import { ProofOfConcept } from "./components";

const App = () => {
  const [activities, setActivities] = useState([]);

  return (
    <ProofOfConcept activities={activities} setActivities={setActivities} />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
