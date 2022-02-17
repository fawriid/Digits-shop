import React, { Component } from "react";

import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Search";
import TopSellers from "./TopSellers";

class Landing extends Component {
    render() {
        return (
            <>
                <Banner />
                <Cards />
                <Search />
                <TopSellers />
            </>
        );
    }
}

export default Landing;
