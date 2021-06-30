import React, { useEffect } from "react";

import { getRoutines } from "../api";

import "./Routines.css";

const Routines = (props) => {
  const { routines, setRoutines } = props;

  useEffect(() => {
    Promise.all([getRoutines()])
      .then(([routines]) => {
        setRoutines(routines);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="routines">
      <ul>
        {routines.map((routine, index) => {
          return (
            <li key={index}>
              Routine {index + 1}
              <ul>
                <li>{routine.name}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Routines;
