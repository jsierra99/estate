import React from 'react';
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Hamburger from "../img/icon-hamburger.svg";
import { FaBars } from "react-icons/fa";

const Header = styled.header`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    position: fixed;
    padding: 0 4%;
`;

const BtnNav = styled(Button)`
    @media screen and (max-width: 768px)
    {
        display: none;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.5rem;

    @media screen and (max-width: 768px)
    {
        display: none;
    }
`;

const Ham = styled.i`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px)
    {
        display: block;
        background-image: url(${Hamburger});
        background-size: contain;
        height: 25px;
        width: 25px;
        cursor: pointer;
    }
`;

const Logo = styled(Link)`
    font-size: 1.75rem;
    color: orange;
    text-decoration: none;
    font-style: italic;
`;

const NavMenuLinks = styled(Link)`
    list-style: none;
    padding-left: 2rem;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 2px;
    transition: .5s ease-in-out;

    &:hover
    {
        opacity: .5;
    }
`;

const Navbar = ({ toggle }) => {
    return (
        <Header>
            <Logo to="/">SUBLIME Tech</Logo>
            <Ham onClick={toggle} css={`cursor: pointer;`}/>
            <NavMenu>
                {menuData.map((x, y) => (
                    <NavMenuLinks to={x.link} key={y}>
                        {x.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <BtnNav big="true" primary="true" to="/contact">Contact Us</BtnNav>
        </Header>
    )
}

export default Navbar
