import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
// components
import Header from "./Components/Header";
import Hamburger from "./Components/Hamburger";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import Products from "./Components/Products";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Hamburger />
                <Switch>
                    <Route path="/products" component={Products} />
                    <Route path="/" component={Landing} />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default App;
