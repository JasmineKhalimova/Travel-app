import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';
import Backdrop from '../UIElements/Backdrop';

const Nav = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
      };
    
      const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
      };

    return(
        <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <MobileNav show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </MobileNav>
  
        <Header>
          <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
            <span />
            <span />
            <span />
          </button>
          <h1 className="main-navigation__title">
            <Link to="/">YourPlaces</Link>
          </h1>
          <nav className="main-navigation__header-nav">
            <NavLinks />
          </nav>
        </Header>
      </React.Fragment>
    );
};

export default Nav;