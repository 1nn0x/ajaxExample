var request;

//Check for compatibility
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

//Ajax Request
request.open('GET', 'data.txt');
request.onreadystatechange = function () {
    //Check Status of request
    if ((request.status === 200) && (request.readyState === 4)) {
        var modify = document.getElementsByTagName('li');
        modify[2].innerHTML = request.responseText;
            for(var i = 0; i < modify.length; ++i){
                modify[i].innerHTML = request.responseText;
        }
    }
};
request.send();

