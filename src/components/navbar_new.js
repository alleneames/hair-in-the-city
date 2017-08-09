import React from 'react';

import { slide as Menu } from 'react-burger-menu';

class NavNew extends React.Component {
    showSettings(event) {
        event.preventDefault();
        <div id="outer-container">
            <Menu pageWrapId={ 'page-wrap' } outerContainerId={ 'outer-container' } />
            <main id='page-wrap'>
            
            </main>
        </div>

    }
    render() {
        return(
            <Menu>
                <a id="home" className="menu-item" href="www.google.com">Home</a>
                <a id="Bio" className="menu-item" href="www.amazon.com">Bio</a>
                <a onClick={ this. showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        )
    }
}

export default NavNew;