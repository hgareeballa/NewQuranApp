import React, { useState } from 'react';
import SuraSearch from './SuraSearch';

function SuraPage(props) {
    window.scrollTo(0, 0);
    let newayats = [];
    const [F, setF] = useState("");
    //console.log("testset:>>>>>>>>>>>.:", props.location.ayats);
    const { ayats, name } = props.location;
    if (ayats) {
        newayats = ayats.filter(function (aya) { return aya.text.includes(F); });
    }
    return (
        <div>
            <SuraSearch setF={setF} />
            <SoraHeader name={name} />
            <ul className="list-group text-right">
                {ayats && (newayats.length > 0) ?
                    newayats.map((aya, index) => (
                        <li key={index} className="list-group-item text-right">
                            <div className="text-right">
                                <span className="badge badge-primary">{aya.id}</span>
                            </div>
                            <div className="text-right">
                                <p className="text-right">{aya.text}
                                </p>
                            </div>
                        </li>
                    ))
                    : (<h1>لايوجد...</h1>)
                }
            </ul>
        </div>

    )
}

export default SuraPage;

function SoraHeader(props) {
    const { name } = props;
    return (
        <div align="center">
            <div className="rounded-pill bg-primary text-center p-1" style={{ width: 'fit-content' }}>
                <h5> سورة {name} </h5>
            </div>
        </div>
    )
}

