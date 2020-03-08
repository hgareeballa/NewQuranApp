import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../data/bism.png';

function Sura(props) {
    let { id, title, totalaya, ayats } = props;
    return (
        <div className="col-sm-3">
            <div className="card shadow-lg p-3 mb-3 rounded">
                <div className="text-left">
                    <button type="button" className="btn btn-primary">
                        <span className="badge badge-light">{id}</span>
                    </button>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title text-center">{title}</h5>
                    <img src={logo} className="img-rounded" alt="Bismella" style={{ width: 150, height: 150 }}></img>
                    <div className="text-center">
                        <Link type="button" className="btn btn-outline-primary" to={{ pathname: '/sura', ayats: ayats, name: title }} >
                            <span className="badge badge-light">{totalaya}</span> :     عدد الايات هو
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sura;
