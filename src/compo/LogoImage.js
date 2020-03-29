import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../data/quran.png';

function LogoImage() {
    return (
        <div className="text-center">
            <Link to="/">
                <img src={logo} className="img-responsive rounded-circle" style={{ width: 100, height: 100 }} alt="Quran Logo"></img>
            </Link>
        </div>
    )
}

export default LogoImage;
