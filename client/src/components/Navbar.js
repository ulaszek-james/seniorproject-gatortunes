import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
            <NavLink to="/about" activeStyle>
                About Us
            </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;