import React, { Component } from "react";

import "./App.css";
// components
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Search from "./Components/Search";
import TopSellers from "./Components/TopSellers";
import Footer from "./Components/Footer";
import Hamburger from "./Components/Hamburger";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Hamburger />
                <Banner />
                <Cards />
                <Search />
                <TopSellers />
                <Footer />
            </>
        );
    }
}

export default App;
