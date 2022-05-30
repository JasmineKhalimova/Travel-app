import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';
import Backdrop from '../UIElements/Backdrop';

const Nav = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };

    return(
        <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        {drawerIsOpen && (
            <MobileNav>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </MobileNav>
        )}
        <Header>
            <button className='main-navigation__menu-btn' onClick={openDrawer}>
                <span>

                </span>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">YourPlaces</Link>
            </h1>
            <nav>
               <NavLinks />
            </nav>
        </Header>
        </React.Fragment>
    );
};

export default Nav;