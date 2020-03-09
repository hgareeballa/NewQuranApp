import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import HOMELOGO from '../data/feather/home.svg';

function HeaderPage() {
    //const SELECTED = true;
    return (
        <div className="p-3">
            <nav className="navbar fixed-top navbar-light bg-light">
                <div>
                    <Link to="/" type="button" className="btn btn-outline-primary">
                        <ReactSVG src={HOMELOGO} />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default HeaderPage;