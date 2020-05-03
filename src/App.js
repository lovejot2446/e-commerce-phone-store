import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Detail from "./components/Detail";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
