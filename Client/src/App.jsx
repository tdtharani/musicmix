import "./App.scss";

import Browse from "./Pages/Browse/Browse";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/home/Home";
import ListenNow from "./Pages/ListenNow/ListenNow";
import Update from "./Pages/update/Update";
import Add from "./Pages/add/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <main>
      <Switch>
        <Route component={Browse} path="/browse" />
        <Route path="/listennow" component={ListenNow} />
        <Route path="/contact" component={Contact} />
        <Route path="/add" component={Add} />
        <Route path="/update" component={Update} />
        <Route exact path="/" component={Home} />
      </Switch>
      </main>
    </Router>
  );
};

export default App;
