import React, { Component } from "react";

import "./App.css";
// components
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Banner />
                <Cards />
            </>
        );
    }
}

export default App;
