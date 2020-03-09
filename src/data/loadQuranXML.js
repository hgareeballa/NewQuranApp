export function myFunction(xml) {
    let suraArray = [];
    var i;
    var ii;
    var xmlDoc = xml.responseXML;
    let ayats = [];

    var x = xmlDoc.getElementsByTagName("quran");
    var y = xmlDoc.getElementsByTagName("sura");
    var z;
    //console.log("X:" + x.length);
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





