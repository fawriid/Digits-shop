import React, { Component } from "react";

import "./App.css";
// components
import Header from "./Components/Header";
import Banner from "./Components/Banner";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Banner />
            </>
        );
    }
}

export default App;
