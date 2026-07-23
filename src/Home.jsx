import React from "react";
import { topics } from "./data/topics";
import { NavLink } from "react-router";

const Home = ({ toggleTheme }) => {
  return (
    <div className="page">
      <header>
        <h1>Шпора</h1>
        <button onClick={toggleTheme}>🌙 / ☀️</button>
      </header>
      <nav className="cards">
        {topics.map((item) => {
          return (
            <NavLink className="card" key={item.id} to={`/${item.id}`}>
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Home;
