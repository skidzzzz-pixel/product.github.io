function loadXMLDoc(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            myFunction(this);
        }
    }   
    xmlhttp.open("GET", "Myproducts1.xml" ,true);
    xmlhttp.send();
}

function myFunction(xml){
    var x,i, XMLDoc ,txt;
    XMLDoc = xml.responseXML;
    txt = "";
    x = XMLDoc.getElementsByTagName("name");
    for (i = 0; i< x.length; i++) {
        txt += x[i].childNodes[0].nodeValue + "<br>";

    }
    document.getElementById("products").innerHTML = txt;

}   