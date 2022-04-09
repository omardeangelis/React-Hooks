import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Progetti from "./Progetti";
import ErrorPage from "./ErrorPage";
import SingleProgetto from "./SingleProgetto";

//Switch per returnare solo il primo componente che matcha
//exact parameter ci richiede un match esatto
//BrowserRouter Contiene le singole Route
//Route rappresenta una pagina che corrisponde ad un aggiornamento del URL

const Index = () => {
  return (
    <Router>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/progetti" className="nav-link">
            Progetti
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/progetti" exact component={Progetti} />
        <Route path="/progetto/:id" exact component={SingleProgetto} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Index;
