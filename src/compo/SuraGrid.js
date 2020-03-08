import React from 'react';
import Sura from './Sura';

function SuraGrid(props) {
    let { suras } = props;
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row text-right">
                    {(suras.length > 0) ?
                        (suras.map((sura, index) =>
                            (
                                <Sura key={index}
                                    id={sura.id}
                                    title={sura.title}
                                    ayats={sura.ayats}
                                    totalaya={sura.totalaya} />
                            )
                        ))
                        : (<h1>لايوجد...</h1>)}
                </div>
            </div>
        </div>
    )
}

export default SuraGrid;