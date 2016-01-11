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
    var e = document.getElementById("dumpobj-div");
    if(e == null)
    {
        e = document.createElement("div");
        e.setAttribute("id", "dumpobj-div");
    }

    var str = "dump " + obj.toString() + "<br>";
    str += "======================================<br>";
    for(var attr in obj)
    {
        str = str + attr + "(" + typeof(obj[attr]) + ")=" + obj[attr] + "<br>";
    }
    str += "======================================<br>";
    e.innerHTML=str;
    document.body.appendChild(e);
}

