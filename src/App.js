import React, { Component } from "react";

import "./App.css";
// components
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Search from "./Components/Search";
import TopSellers from "./Components/TopSellers";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Banner />
                <Cards />
                <Search />
                <TopSellers />
            </>
        );
    }
}

export default App;
