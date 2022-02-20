import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
// components
import Header from "./Components/Header";
import Hamburger from "./Components/Hamburger";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import NotFound from "./Components/NotFound";
import Phone from "./Components/Phone";
import TopSellers from "./Components/TopSellers";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Hamburger />
                <Routes>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/products/:id" element={<Phone />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/" element={<Landing />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/*" element={<Navigate to="/notfound" />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default App;
