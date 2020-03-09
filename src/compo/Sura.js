import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../data/bism.png';
import { ReactSVG } from 'react-svg';
import OPENLOGO from '../data/feather/book-open.svg';

function Sura(props) {
    let { id, title, totalaya, ayats } = props;
    const [Ani, setAni] = useState(false);

    const HandelMouseOver = () => {
        setAni(!Ani);
        //console.log("Mouse Over Now!::", Ani);
    }
    return (
        <div className="col-sm-3" onMouseEnter={HandelMouseOver} onMouseLeave={HandelMouseOver}>
            <div className={Ani ? "card p-3 mb-3 rounded border border-primary" : "card shadow-lg p-3 mb-3 rounded "}>
                <div className="text-left">
                    <button type="button" className="btn btn-primary">
                        <span className="badge badge-light">{id}</span>
                    </button>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title text-center">{title}</h5>
                    {/* <img src={logo} className="img-rounded" alt="Bismella" style={{ width: 150, height: 150 }}></img> */}
                    <div className="container-sm">
                        <img src={logo} className="img-rounded img-responsive" alt="Bismella" style={{ width: '100%', height: '100%' }}></img>
                    </div>
                    <div className="text-center" dir="rtl">
                        <Link type="button" className="btn btn-outline-primary" to={{ pathname: '/sura', ayats: ayats, name: title }} >
                            عدد الايات :
                         <span className="badge badge-light">{totalaya}</span>
                            <ReactSVG src={OPENLOGO} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sura;

