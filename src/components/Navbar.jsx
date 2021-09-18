import React, { Component } from 'react';

class NavBar extends React.Component {
    render() { 
        return (
            <nav className="nav">
                <a className="nav-link d-flex" href="#">Navbar <span className="tot">{this.props.totalCounters}</span></a>
            </nav>
        );
    }
}

export default NavBar;