import React, { useState, useEffect } from 'react';
import SuraSearch from './SuraSearch';
import LoadingPage from './LoadingPage';
import SuraGrid from './SuraGrid';
import myxml from '../data/quran.xml';

let suraArray = [];

function AppMain() {
    const [suras, setSuras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [F, setF] = useState("");
    const fsuras = suras.filter(function (sura) { return sura.title.includes(F); });

    useEffect(() => {
        console.log(">>> ARRAY>>>:");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                setSuras(myFunction(this));
                setLoading(false);
            }
        };
        xhttp.open("GET", myxml, true);
        xhttp.send();
        //fetchData();
    }, []);


    // useEffect(() => {
    //     console.log(">>> ARRAY>>>:", suraArray);
    //     const fetchData = async () => {
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.onreadystatechange = function () {
    //             if (this.readyState === 4 && this.status === 200) {
    //                 setSuras(myFunction(this));
    //                 setLoading(false);
    //             }
    //         };
    //         xhttp.open("GET", myxml, true);
    //         xhttp.send();
    //     };
    //     fetchData();
    // }, []);


    return (
        <div>
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

// function Loadme(useEffect, setLoading, setSuras) {
//     useEffect(() => {
//         const fetchData = async () => {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//                 if (this.readyState === 4 && this.status === 200) {
//                     setSuras(myFunction(this));
//                     setLoading(false);
//                 }
//             };
//             xhttp.open("GET", myxml, true);
//             xhttp.send();
//         };
//         fetchData();
//     }, []);

// }

function myFunction(xml) {
    var i;
    var ii;
    var xmlDoc = xml.responseXML;
    let ayats = [];

    var x = xmlDoc.getElementsByTagName("quran");
    var y = xmlDoc.getElementsByTagName("sura");
    var z;
    console.log("X:" + x.length);
    //console.log("Y:" + y.length);
    for (i = 0; i < y.length; i++) {
        //for (i = 0; i < 1; i++) {
        //for (i = 0; i < 1; i++) {
        ayats = [];
        //console.log(x[0].getElementsByTagName("sura")[i].getAttribute('index'));
        //console.log(x[0].getElementsByTagName("sura")[i].getAttribute('name'));

        z = y[i].getElementsByTagName("aya").length;
        //console.log("Z:" + z);
        for (ii = 0; ii < z; ii++) {
            //console.log(y[i].getElementsByTagName("aya")[ii].getAttribute('index'));
            //console.log(y[i].getElementsByTagName("aya")[ii].getAttribute('text'));
            ayats[ii] = {
                'id': y[i].getElementsByTagName("aya")[ii].getAttribute('index'),
                'text': y[i].getElementsByTagName("aya")[ii].getAttribute('text')
            }
        }
        //console.log(ayats);

        suraArray[i] = {
            'id': x[0].getElementsByTagName("sura")[i].getAttribute('index'),
            'title': x[0].getElementsByTagName("sura")[i].getAttribute('name'),
            'totalaya': y[i].getElementsByTagName("aya").length,
            'ayats': ayats
        };
        //console.log(">>>>>>>>>>>>>>>>>" + ayats);
    }

    return suraArray;
}




