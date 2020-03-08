import React from 'react';
import { NavLink } from 'react-router-dom';


function HeaderPage() {
    //const SELECTED = true;
    return (
        <div className="p-3">
            <nav className="navbar fixed-top navbar-light bg-light">
                <NavLink to="/" className="navbar-brand border" exact>
                    القران الكريم
                </NavLink>
            </nav>
        </div>
    )
}

export default HeaderPage;