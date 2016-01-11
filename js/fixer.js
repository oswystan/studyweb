/*
 ************************************************
 * dump objects attributes and functions in console
 ************************************************
 */
function dumpObj(obj)
{
    for(var attr in obj)
    {
        console.log(attr + "(" + typeof(obj[attr]) + ")=" + obj[attr]);
    }
}

/*
 ************************************************
 * dump objects attributes and functions in
 * current page (append it into body)
 ************************************************
 */
function dumpObjInPage(obj)
{
    var e = document.createElement("div");
    var str = "";
    for(var attr in obj)
    {
        str = str + attr + "(" + typeof(obj[attr]) + ")=" + obj[attr] + "<br>";
    }
    e.innerHTML=str;
    document.body.appendChild(e);
}

