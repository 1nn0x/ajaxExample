var mybutton = document.getElementById('loadButton');

mybutton.onclick = function ()
{
    var request;

//Check for compatibility
    if (window.XMLHttpRequest)
    {
        request = new XMLHttpRequest()
    }
    else
    {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

//Ajax Request
    request.open('GET', 'data.json');
    request.onreadystatechange = function ()
    {
        //Check Status of request
        if ((request.status === 200) && (request.readyState === 4))
        {
            var items = JSON.parse(request.responseText);
            var output = '<ul>';
            for (var key in items)
            {
                output += '<li>' + items[key].name + '</li>';
            }
            output += '</ul>';

            document.getElementById('update').innerHTML = output;
        }
    };
    request.send();

};