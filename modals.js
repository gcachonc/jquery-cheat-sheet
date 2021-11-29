window.onload = addListeners;



function addListeners(){
    //Selectors
    document.getElementById("selectors1").addEventListener("click", function() {createModal(fillSelector1, executeSelector1)});
    document.getElementById("selectors2").addEventListener("click", function() {createModal(fillSelector2, executeSelector2)});
    document.getElementById("selectors3").addEventListener("click", function() {createModal(fillSelector3, executeSelector3)});
    document.getElementById("selectors4").addEventListener("click", function() {createModal(fillSelector4, executeSelector4)});
    document.getElementById("selectors5").addEventListener("click", function() {createModal(fillSelector5, executeSelector5)});
    document.getElementById("selectors6").addEventListener("click", function() {createModal(fillSelector6, executeSelector6)});
    document.getElementById("selectors7").addEventListener("click", function() {createModal(fillSelector7, executeSelector7)});
    document.getElementById("selectors8").addEventListener("click", function() {createModal(fillSelector8, executeSelector8)});
    document.getElementById("selectors9").addEventListener("click", function() {createModal(fillSelector9, executeSelector9)});
    document.getElementById("selectors10").addEventListener("click", function() {createModal(fillSelector10, executeSelector10)});
}

function fillSelector1(){
    document.getElementById("titleJSdiv").textContent = "Iterate a collection of elements and apply a change of style on them";
    document.getElementById("titleJQdiv").textContent = "Iterate a collection of elements and apply a change of style on them";
    document.getElementById("exJSdiv").innerText = `for (var i = 0; i < collection.length; i++)
    {
        collection[i].style.color = "red";
    }`
    document.getElementById("exJQdiv").textContent = "$('.JQ').css('color', 'red');"
}

function executeSelector1(){
    let jsButton = document.getElementById("buttonJS");
    jsButton.addEventListener("click", selector1JS);
    document.getElementById("buttonJQ").addEventListener("click", selector1JQ);
}

function fillSelector2(){
    document.getElementById("titleJSdiv").textContent = "Get the parent element of a certain element and change its font weight";
    document.getElementById("titleJQdiv").textContent = "Get the parent element of a certain element and change its font weight";
    document.getElementById("exJSdiv").innerText = `
    document.getElementById("titleJS").parentElement.style.fontWeight = "bold";`
    document.getElementById("exJQdiv").textContent = "$('.JQ').parent().css('font-weight', 'bold');"
}

function executeSelector2(){
    let jsButton = document.getElementById("buttonJS");
    jsButton.addEventListener("click", selector2JS);
    document.getElementById("buttonJQ").addEventListener("click", selector2JQ);
}
function fillSelector3(){
    document.getElementById("titleJSdiv").textContent = "Get the collection of children of a certain element and change its font weight";
    document.getElementById("titleJQdiv").textContent = "Get the collection of children of a certain element and change its font weight";
    document.getElementById("exJSdiv").innerText = `
    var collection = document.getElementById("JSdiv").childNodes;
    console.log(collection);
    collection[7].style.fontWeight = "bold";
    collection[3].style.fontWeight = "bold";`
    document.getElementById("exJQdiv").textContent = "$('#JQdiv').children().css('font-weight, 'bold');"
}

function executeSelector3(){
    let jsButton = document.getElementById("buttonJS");
    jsButton.addEventListener("click", selector3JS);
    document.getElementById("buttonJQ").addEventListener("click", selector3JQ);
}
function fillSelector4(){
    document.getElementById("titleJSdiv").textContent = "Get all the elements that have a certain class and change their font weight";
    document.getElementById("titleJQdiv").textContent = "Get all the elements that have a certain class and change their font weight";
    document.getElementById("exJSdiv").innerText = `
    var collection = document.getElementsByClassName("JS");

    for (var i = 0; i < collection.length; i++)
    {
        collection[i].style.fontWeight = "lighter";
    }`
    document.getElementById("exJQdiv").textContent = "$('.JQ').css('font-weight', 'lighter');"
}

function executeSelector4(){
    let jsButton = document.getElementById("buttonJS");
    jsButton.addEventListener("click", selector4JS);
    document.getElementById("buttonJQ").addEventListener("click", selector4JQ);
}






function createModal(callback1 , callback2){
    var eventDiv = document.createElement("div")
    eventDiv.setAttribute("id", "Mymodal");
    eventDiv.className = "modal";
    let body = document.body;
    body.appendChild(eventDiv);
    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    eventDiv.appendChild(modalContent);

    const html = `
    <span class="close" id="closeModal">&times;</span>
    <div class="DivisionDiv">
        <div id = "JSdiv" class = "divJS">
            <h1 id = "titleJS" class = "JS">Description:</h1>
            <div id = "titleJSdiv" class = "JS"></div>
            <h1 id = "exJS" class = "JS"> example:</h1>
            <div id = "exJSdiv" class = "JS"></div>
            <button id = "buttonJS">Try it!</button>
        </div>
        <div id = "JQdiv" class = "divJQ">
            <h1 id = "titleJQ" class = "JQ">Description:</h1>
            <div id = "titleJQdiv" class = "JQ"></div>
            <h1 id = "exJQ" class = "JQ"> example:</h1>
            <div id = "exJQdiv" class = "JQ"></div>
            <button id = "buttonJQ">Try it!</button>
        </div>
    </div>`

    modalContent.innerHTML = html;

    document.getElementById("closeModal").addEventListener("click", closeModal);

    callback1();
    callback2();
    
}

function closeModal(){
    var eventDiv = document.getElementById("Mymodal");
    eventDiv.remove();
}