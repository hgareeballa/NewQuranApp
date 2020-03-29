import React, { useState, useEffect, useContext } from 'react';
import SuraSearch from './SuraSearch';
import LoadingPage from './LoadingPage';
import SuraGrid from './SuraGrid';
import { QuranContext } from '../QuranContext';
import LogoImage from './LogoImage';


let suraArray = [];

function AppMain() {
    suraArray = useContext(QuranContext);

    const [suras, setSuras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [F, setF] = useState("");

    useEffect(() => {
        setSuras(suraArray);
        setLoading(false);
        console.log("Update Sura Here Main App ");
    }, []);
    const fsuras = suras.filter(function (sura) { return sura.title.includes(F); });

    return (
        <div>
            <LogoImage />
            <SuraSearch setF={setF} />
            {loading ? (<LoadingPage />) : (
                <div dir="rtl">
                    <SuraGrid suras={fsuras} />
                </div>
            )}
        </div>
    );
}
export default AppMain;

