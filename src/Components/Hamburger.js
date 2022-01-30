import React, { Component } from "react";

import logo from "../images/Logo.png";
import styled from "styled-components";

// container styled-components
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3.5rem;
    background-color: #9e9e9e;
    @media (min-width: 768px) {
        display: none;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;
// hamburger menu styled-components
const Menu = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    z-index: 5;

    div {
        height: 0.3rem;
        width: 3.5rem;
        background-color: #fff;
        margin: 3px 0;
        border-radius: 2px;
        transform-origin: 5px;
        transition: all 200ms linear;
        &:nth-child(1) {
            transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
        }
        &:nth-child(2) {
            transform: ${(props) =>
                props.open ? "translateX(-100%)" : "translateX(0deg)"};
            opacity: ${(props) => (props.open ? "0" : "1")};
        }
        &:nth-child(3) {
            transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0deg)")};
        }
    }
`;

const NavItem = styled.ul`
    position: fixed;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    height: 100vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 10rem 0 0 3rem;
    z-index: 4;
    transition: all 200ms linear;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
    li {
        margin: 2rem 0;
        font-size: 2rem;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
    .btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #9e9e9e;
        border: none;
        outline: none;
        border-radius: 5px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        padding: 0.5rem 0.25rem;
        width: 80%;
    }
    .btn span {
        color: #fff;
        font-size: 1.8rem;
        font-weight: bold;
        width: 20%;
        cursor: pointer;
    }
    .btn input {
        font-size: 1.7rem;
        background-color: #9e9e9e;
        outline: none;
        border: none;
        color: #fff;
        border-radius: 5px;
        padding-left: 1rem;
        width: 80%;
    }
`;

class Hamburger extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
    }

    clickHandler = () => {
        this.setState({
            open: !this.state.open,
        });
    };
    render() {
        return (
            <Container>
                <img alt="logo" src={logo}></img>
                <Menu open={this.state.open} onClick={this.clickHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Menu>

                <NavItem open={this.state.open}>
                    <li>
                        <a href="#home">Home Page </a>
                    </li>
                    <li>
                        <a href="#top-sellers">Top Sellers</a>
                    </li>
                    <li>
                        <a href="#products">Products</a>
                    </li>
                    <li>
                        <button className="btn">
                            <form>
                                <span type="submit">
                                    <i className="fas fa-search"></i>
                                </span>
                                <input></input>
                            </form>
                        </button>
                    </li>
                </NavItem>
            </Container>
        );
    }
}

export default Hamburger;
