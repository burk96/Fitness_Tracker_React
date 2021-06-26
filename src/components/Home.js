import React from "react";

const Home = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return <h3>Welcome Home {user ? user.username : "Fitness Freak"}</h3>;
};

export default Home;
