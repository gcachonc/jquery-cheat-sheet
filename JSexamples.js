function selector1JS(){
    var collection = document.getElementsByClassName("JS");

    for (var i = 0; i < collection.length; i++)
    {
        collection[i].style.color = "red";
    }
}

function selector2JS(){
    document.getElementById("titleJS").parentElement.style.fontWeight = "bold";
}
function selector3JS(){
    var collection = document.getElementById("JSdiv").childNodes;
    collection[7].style.fontWeight = "bold";
    collection[3].style.fontWeight = "bold";
}
function selector4JS(){
    var collection = document.getElementsByClassName("JS");

    for (var i = 0; i < collection.length; i++)
    {
        collection[i].style.fontWeight = "lighter";
    }
}
