import React from "react";
import { useContext } from 'react'
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { Outlet } from 'react-router-dom';   
import { UserContext} from '../contexts/googleuser.context';
import { signUserOut } from '../firebase/firebase'

const Navbar = () => {

    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

    return (currentUser ? (<div>
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

            {currentUser ? (<NavLink onClick={signUserOut} activeStyle>
                Log out
                </NavLink>) :

            (<NavLink  to='/login' activeStyle>
                Login
                </NavLink>)
                
            }
            
            </NavMenu>
        </Nav>
        <Outlet />
        </div>) : (<div>
        <Nav>
            <NavMenu>
            <NavLink to="/" activeStyle>
                Home
            </NavLink>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>

            {currentUser ? (<NavLink onClick={signUserOut} activeStyle>
                Log out
                </NavLink>) :

            (<NavLink  to='/login' activeStyle>
                Login
                </NavLink>)
                
            }
            
            </NavMenu>
        </Nav>
        <Outlet />
</div>)
        
    );
};

export default Navbar;

