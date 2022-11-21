import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { Outlet } from 'react-router-dom';   

const Navbar = (code) => {
    return (
        <div>
        <Nav>
            <NavMenu>
            <NavLink to="/" activeStyle>
                Home
            </NavLink>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/profile" activeStyle>
                Profile
            </NavLink>
            <NavLink to='/login' activeStyle>
                Login
                </NavLink>
            </NavMenu>
        </Nav>
        <Outlet />
        </div>
    );
};

export default Navbar;