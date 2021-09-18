import React, { Component } from 'react';

class NavBar extends React.Component {
    render() { 
        return (
            <nav className="nav">
                <a className="nav-link active" href="#">Active</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link disabled" href="#">Disabled</a>
            </nav>
        );
    }
}
 
export default NavBar;