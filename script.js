var request;

//Check for compatibility
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

//Ajax Request
request.open('GET', 'data.xml');
request.onreadystatechange = function () {
    //Check Status of request
    if ((request.status === 200) && (request.readyState === 4)) {

        var items = request.responseXML.getElementsByTagName('name');
        var output = '<ul>';
        for(var i = 0; i < items.length; i++)
        {
            output += '<li>' + items[i].firstChild.nodeValue + '</li>';
        }
        output += '</ul>';

        document.getElementById('update').innerHTML = output;

    }
};
request.send();

